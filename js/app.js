// ============================================================================
// A.R.C. — APLICAÇÃO PRINCIPAL (NAVEGAÇÃO, GUARD DE ROTAS, COMPARTILHAMENTO)
// ============================================================================

window.ARC_App = (function() {
  "use strict";

  // Inicialização comum a todas as páginas
  function init() {
    setupAuthGuard();
    setupGlobalUI();
    setupNoise();
  }

  // Guarda de autenticação para páginas da área restrita
  function setupAuthGuard() {
    var isRestricted = window.location.pathname.indexOf("/classified/") !== -1 ||
                       window.location.pathname.indexOf("\\classified\\") !== -1;
    var isAuthPage = window.location.pathname.indexOf("signin") !== -1 ||
                     window.location.pathname.indexOf("auth") !== -1;

    if (isRestricted && !isAuthPage) {
      if (!window.ARC_Auth.isAuthenticated()) {
        window.location.href = "../signin.html";
        return;
      }
      renderRestrictedShell();
    }

    if (isAuthPage && window.ARC_Auth.isAuthenticated()) {
      window.location.href = "classified/index.html";
    }
  }

  // Renderiza a barra lateral e cabeçalho da área restrita
  function renderRestrictedShell() {
    var user = window.ARC_Auth.getUser() || {};
    var now = new Date();
    var dateStr = now.toLocaleDateString("pt-BR") + " " + now.toLocaleTimeString("pt-BR", {hour: "2-digit", minute:"2-digit"});

    var shell =
      '<div class="arc-app">' +
      '  <aside class="arc-sidebar">' +
      '    <div class="arc-sidebar-header">' +
      '      <div class="arc-sidebar-logo">ARC</div>' +
      '      <div>' +
      '        <div class="arc-sidebar-title">CLASSIFIED ARCHIVE</div>' +
      '        <div class="arc-sidebar-sub">SISTEMA INTERNO • NÍVEL 3</div>' +
      '      </div>' +
      '    </div>' +
      '    <div class="arc-sidebar-user">' +
      '      <span>' + (user.user || "AGENT") + '</span>' +
      '    </div>' +
      '    <ul class="arc-nav">' +
      '      <li><a href="index.html" class="nav-item"><span class="icon">▭</span> Dashboard</a></li>' +
      '      <li><a href="entities.html" class="nav-item"><span class="icon">⬡</span> Entity Database</a></li>' +
      '      <li><a href="incidents.html" class="nav-item"><span class="icon">⚠</span> Incident Reports</a></li>' +
      '      <li><a href="field-ops.html" class="nav-item"><span class="icon">▷</span> Field Operations</a></li>' +
      '      <li><a href="research.html" class="nav-item"><span class="icon">🔬</span> Research Documents</a></li>' +
      '      <li><a href="evidence.html" class="nav-item"><span class="icon">📷</span> Photographic Evidence</a></li>' +
      '      <li><a href="personnel.html" class="nav-item"><span class="icon">👤</span> Personnel Records</a></li>' +
      '      <li><a href="restricted.html" class="nav-item"><span class="icon">🔒</span> Restricted Files</a></li>' +
      '      <li><a href="communications.html" class="nav-item"><span class="icon">💬</span> Internal Communications</a></li>' +
      '    </ul>' +
      '    <div class="arc-sidebar-footer">' +
      '      <button class="arc-btn-logout" onclick="ARC_App.doLogout()">Sair do Sistema</button>' +
      '      <div class="arc-sidebar-status">' +
      '        <span class="arc-dot"></span> Sistema online • ' + dateStr +
      '      </div>' +
      '    </div>' +
      '  </aside>' +
      '  <main class="arc-main" id="arc-main">' +
      '    <header class="arc-topbar">' +
      '      <div class="arc-topbar-left">' +
      '        <div class="arc-breadcrumb"><span id="arc-breadcrumb-text">ARC System</span></div>' +
      '      </div>' +
      '      <div class="arc-topbar-right">' +
      '        <div class="arc-search">' +
      '          <input type="text" id="arc-global-search" placeholder="Buscar arquivos..." />' +
      '        </div>' +
      '        <div class="arc-notification" title="Notificações internas">' +
      '          <span class="arc-badge-count" id="arc-notif-count">3</span>' +
      '        </div>' +
      '        <div class="arc-user-chip">' +
      '          <div class="arc-user-avatar">' + (user.user ? user.user.charAt(0) : "A") + '</div>' +
      '          <div class="arc-user-info">' +
      '            <span>' + (user.user || "AGENT") + '</span>' +
      '            <span class="arc-user-role">' + (user.role || "AGENT-LEVEL-3") + '</span>' +
      '          </div>' +
      '        </div>' +
      '      </div>' +
      '    </header>' +
      '    <div class="arc-page" id="arc-page-content">' +
      '      <!-- Conteúdo da página injetado aqui -->' +
      '    </div>' +
      '    <div class="arc-toast" id="arc-toast"></div>' +
      '  </main>' +
      '</div>';

    // Insere o shell no corpo se ainda não existir
    if (!document.querySelector(".arc-app")) {
      document.body.innerHTML = shell + (document.body.innerHTML || "");
    }

    // Marca item ativo na navegação
    var currentFile = window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".arc-nav a").forEach(function(a) {
      var href = a.getAttribute("href");
      if (href === currentFile) {
        a.classList.add("active");
      }
    });

    // Busca global
    var searchInput = document.getElementById("arc-global-search");
    if (searchInput) {
      searchInput.addEventListener("keypress", function(e) {
        if (e.key === "Enter") {
          var q = this.value.trim();
          if (q) {
            window.location.href = "entities.html?search=" + encodeURIComponent(q);
          }
        }
      });
    }
  }

  function setupGlobalUI() {
    // Logout global se existir botão
    document.querySelectorAll("[data-arc-logout]").forEach(function(btn) {
      btn.addEventListener("click", function(e) {
        e.preventDefault();
        window.ARC_App.doLogout();
      });
    });
  }

  function doLogout() {
    window.ARC_Auth.logout();
    window.ARC_Toast.show("Sessão encerrada. Redirecionando...", 1500);
    setTimeout(function() {
      var isRestricted = window.location.pathname.indexOf("/classified/") !== -1;
      window.location.href = isRestricted ? "../signin.html" : "signin.html";
    }, 1600);
  }

  function setupNoise() {
    // Efeito de ruído visual sutil apenas na área restrita
    if (window.location.pathname.indexOf("/classified/") !== -1) {
      document.body.classList.add("arc-noise");
    }
  }

  // Utilitário: formatar data
  function formatDate(iso) {
    if (!iso) return "—";
    var d = new Date(iso);
    return d.toLocaleDateString("pt-BR") + " " + d.toLocaleTimeString("pt-BR", {hour:"2-digit", minute:"2-digit"});
  }

  // Utilitário: criar insígnia de classificação
  function classBadge(level) {
    var map = {
      "PUBLIC": "arc-class-public",
      "INTERNAL USE ONLY": "arc-class-internal",
      "CONFIDENTIAL": "arc-class-confidential",
      "SECRET": "arc-class-secret",
      "TOP SECRET": "arc-class-topsecret"
    };
    var cls = map[level] || "arc-class-internal";
    return '<span class="arc-class ' + cls + '">' + level + '</span>';
  }

  // Utilitário: criar insígnia de status
  function statusBadge(st) {
    var map = {
      "ACTIVE": "arc-status-active",
      "UNDER INVESTIGATION": "arc-status-investigation",
      "CONTAINED": "arc-status-contained",
      "CLOSED": "arc-status-closed",
      "MISSING": "arc-status-missing"
    };
    var cls = map[st] || "arc-status-investigation";
    return '<span class="arc-status ' + cls + '">' + st + '</span>';
  }

  // Utilitário: criar insígnia de ameaça
  function threatBadge(lvl) {
    var map = {
      "LOW": "arc-threat-low",
      "MODERATE": "arc-threat-moderate",
      "HIGH": "arc-threat-high",
      "CRITICAL": "arc-threat-critical",
      "UNKNOWN": "arc-threat-unknown"
    };
    var cls = map[lvl] || "arc-threat-unknown";
    return '<span class="arc-threat ' + cls + '">' + lvl + '</span>';
  }

  return {
    init: init,
    doLogout: doLogout,
    formatDate: formatDate,
    classBadge: classBadge,
    statusBadge: statusBadge,
    threatBadge: threatBadge
  };
})();

// Inicializa quando o DOM estiver pronto
document.addEventListener("DOMContentLoaded", function() {
  if (window.ARC_App) window.ARC_App.init();
});
