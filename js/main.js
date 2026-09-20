    /*
     * I18N
     * -------------------------------------------------------
     * Простая фронтенд-система переводов: словарь ru/en +
     * применение через атрибуты data-i18n / data-i18n-html /
     * data-i18n-attr-*. Никакого бэкенда, никаких доп. страниц —
     * язык выбирается один раз (см. скрипт в <head>) и хранится
     * в window.__fijmanLang / localStorage.
     */

    const translations = {
      en: {
        brandMeta: "web & desktop",

        navWork: "Work",
        navBuild: "Services",
        navCode: "Code",
        navProcess: "Process",
        navContact: "Contact",

        ctaStartProject: "Start a project",
        ctaSeeWork: "See the work",

        modalTitle: "Start a <span class=\"accent\">project</span>",
        modalLead:
          "Pick whatever is easiest — a couple of lines about your " +
          "website, web app or Electron desktop app is enough.",
        modalTypeLabel: "What do you need?",
        chipWebsite: "Website",
        chipWebApp: "Web app",
        chipDesktop: "Electron app",
        chipUnsure: "Not sure yet",
        modalWaysLabel: "Get in touch",
        modalCopy: "Copy email",
        modalCopied: "Copied",
        modalMailSubject: "New project",
        modalMailBody:
          "Hi! I'd like to discuss a project.\n\n" +
          "What I need: {type}\n" +
          "A few words about it: ",
        modalNote: "Usually replies within 12 hours",
        ariaClose: "Close",

        ariaMainNav: "Main navigation",
        ariaMobileNav: "Mobile navigation",
        ariaToggleMenu: "Toggle menu",
        ariaScrollWork: "Scroll to Work",
        ariaOpenLiveSite: "Open the live site in a new tab",
        ariaWavesCanvas: "Animated layered waves that rise under the pointer",

        heroKicker: "Web & Electron development",
        heroBadge: "Available for new projects",
        heroDescription:
          "Websites, web applications and cross-platform desktop apps " +
          "on Electron. Designed with care — <span class=\"accent\">built with code</span>.",

        statResponse: "Response to inquiries",
        statBuilt: "Built for your needs",
        statCustom: "Customization possibilities",

        workTitle: "See what<br>it does.",

        statusSoon: "SOON",
        statusLive: "LIVE",

        loadingLiveSite: "Loading live site…",
        livePreviewSoon: "Live preview coming soon",
        liveSitePreviewSuffix: "live site preview",

        buildTitle: "Websites and<br>desktop apps.",

        buildWebTag: "01 / WEBSITES",
        buildWebTitle: "Websites",
        buildWebDesc:
          "Landing pages, business sites and portfolios. Responsive, " +
          "fast and built around your content, not a template.",

        buildAppsTag: "02 / WEB APPS",
        buildAppsTitle: "Web apps",
        buildAppsDesc:
          "Configurators, dashboards, forms and custom interfaces — " +
          "pages that work as a tool, not just a brochure.",

        buildDesktopTag: "03 / ELECTRON",
        buildDesktopTitle: "Desktop apps",
        buildDesktopDesc:
          "Cross-platform apps on Electron for Windows, macOS and " +
          "Linux — built with web technologies, installed like any " +
          "regular program.",

        buildSupportTag: "04 / SUPPORT",
        buildSupportTitle: "Support",
        buildSupportDesc:
          "Clean, documented code that can be updated and extended " +
          "after launch — by me or by your own team.",

        altWebPhoto: "Responsive website layouts on different devices",
        altAppsPhoto: "Web application interface on a computer",
        altDesktopPhoto: "Desktop computer running a cross-platform app",
        altCodePhoto: "Clean web development code on a screen",

        codeMetaLabel: "Under the hood",
        codeTitle: "Clean code.<br>Clear logic.",
        liveResultLabel: "Live result",
        waveHint: "Move or drag across the waves",

        processTitle: "From idea<br>to launch.",
        processLead:
          "Seven stages, one person, no handoffs lost in translation. " +
          "Async by default, weekly syncs, every decision documented " +
          "in the repo — not buried in a chat history.",

        step1Title: "Idea",
        step1Desc:
          "Discovery call, goals, audience and competitors — " +
          "so we solve the right problem, not just a nice one.",
        step1Deliv: "Brief & scope",

        step2Title: "Structure",
        step2Desc:
          "Sitemap, content model and user flows — the skeleton " +
          "everything else has to agree with.",
        step2Deliv: "Wireframes",

        step3Title: "Visual",
        step3Desc:
          "Type, color, spacing and tone locked into tokens — " +
          "a system, not a one-off set of screens.",
        step3Deliv: "Design tokens",

        step4Title: "Interface",
        step4Desc:
          "High-fidelity screens for every breakpoint and state — " +
          "loading, empty, error included.",
        step4Deliv: "Clickable prototype",

        step5Title: "Code",
        step5Desc:
          "Semantic markup, component architecture, small " +
          "reviewable commits — no framework left un-questioned.",
        step5Deliv: "Git history",

        step6Title: "Test",
        step6Desc:
          "Cross-browser passes, accessibility checks and a " +
          "Lighthouse run for websites — and test builds on each " +
          "target OS for Electron apps.",
        step6Deliv: "Lighthouse 95+",

        step7Title: "Launch",
        step7Desc:
          "Deployment to your hosting or ready-to-install builds " +
          "for Windows, macOS and Linux. CI/CD, monitoring and a " +
          "short handover doc — so you're never locked to me.",
        step7Deliv: "Live site or installer",

        contactTitle: "Have a<br><span class=\"accent\">project?</span>",
        contactLead:
          "Tell me what you need — a website, a web app or an " +
          "Electron desktop app. A few lines are enough to start. " +
          "You'll get a reply from the developer directly, usually " +
          "within 12 hours.",
        contactOrderLabel: "Order a project",
        contactFollowLabel: "Blog & social",
        contactEmailLabel: "Email",
        contactBlogLabel: "Blog",

        footerDeveloperLabel: "DEVELOPER",

        pageTitle: "Fijman — Web & Electron Development",
        metaDescription: "Fijman — website, web application and Electron desktop app development."
      },

      ru: {
        brandMeta: "web и desktop",

        navWork: "Работы",
        navBuild: "Услуги",
        navCode: "Код",
        navProcess: "Процесс",
        navContact: "Контакты",

        ctaStartProject: "Начать проект",
        ctaSeeWork: "Смотреть работы",

        modalTitle: "Начать <span class=\"accent\">проект</span>",
        modalLead:
          "Выберите удобный способ — достаточно пары строк о вашем " +
          "сайте, Web-приложении или Desktop-программе на Electron.",
        modalTypeLabel: "Что нужно сделать?",
        chipWebsite: "Сайт",
        chipWebApp: "Web-приложение",
        chipDesktop: "Desktop на Electron",
        chipUnsure: "Пока не знаю",
        modalWaysLabel: "Как связаться",
        modalCopy: "Скопировать почту",
        modalCopied: "Скопировано",
        modalMailSubject: "Новый проект",
        modalMailBody:
          "Здравствуйте! Хочу обсудить проект.\n\n" +
          "Что нужно: {type}\n" +
          "Пара слов о задаче: ",
        modalNote: "Обычно отвечаю в течение 12 часов",
        ariaClose: "Закрыть",

        ariaMainNav: "Основная навигация",
        ariaMobileNav: "Мобильное меню",
        ariaToggleMenu: "Открыть меню",
        ariaScrollWork: "Перейти к разделу «Работы»",
        ariaOpenLiveSite: "Открыть сайт в новой вкладке",
        ariaWavesCanvas: "Анимированные волны, поднимающиеся под курсором",

        heroKicker: "Web и Electron разработка",
        heroBadge: "Готов к новым проектам",
        heroDescription:
          "Сайты, Web-приложения и кроссплатформенные Desktop-программы " +
          "на Electron. Продуманные до деталей — <span class=\"accent\">и написанные кодом</span>.",

        statResponse: "Ответ на заявку",
        statBuilt: "Под ваши задачи",
        statCustom: "Возможностей кастомизации",

        workTitle: "Смотрите,<br>как это работает.",

        statusSoon: "СКОРО",
        statusLive: "LIVE",

        loadingLiveSite: "Загружаем сайт…",
        livePreviewSoon: "Превью скоро появится",
        liveSitePreviewSuffix: "предпросмотр сайта",

        buildTitle: "Web и<br>Desktop-приложения.",

        buildWebTag: "01 / САЙТЫ",
        buildWebTitle: "Сайты",
        buildWebDesc:
          "Лендинги, сайты компаний и портфолио. Адаптивные, быстрые " +
          "и собранные под ваш контент, а не по шаблону.",

        buildAppsTag: "02 / WEB APPS",
        buildAppsTitle: "Web-приложения",
        buildAppsDesc:
          "Конфигураторы, дашборды, формы и кастомные интерфейсы — " +
          "страницы, которые работают как инструмент, а не как визитка.",

        buildDesktopTag: "03 / ELECTRON",
        buildDesktopTitle: "Desktop-приложения",
        buildDesktopDesc:
          "Кроссплатформенные программы на Electron для Windows, " +
          "macOS и Linux: пишутся на Web-технологиях, а устанавливаются " +
          "и запускаются как обычное приложение.",

        buildSupportTag: "04 / ПОДДЕРЖКА",
        buildSupportTitle: "Поддержка",
        buildSupportDesc:
          "Чистый, задокументированный код, который можно обновлять " +
          "и расширять после запуска — мне или вашей команде.",

        altWebPhoto: "Адаптивные макеты сайта на разных устройствах",
        altAppsPhoto: "Интерфейс Web-приложения на экране компьютера",
        altDesktopPhoto: "Компьютер с запущенным кроссплатформенным приложением",
        altCodePhoto: "Чистый код Web-разработки на экране",

        codeMetaLabel: "Под капотом",
        codeTitle: "Чистый код.<br>Понятная логика.",
        liveResultLabel: "Живой результат",
        waveHint: "Двигайте курсор или проведите пальцем по волнам",

        processTitle: "От идеи<br>до запуска.",
        processLead:
          "Семь этапов, один человек, без потерь на стыках задач. " +
          "Асинхронная работа по умолчанию, еженедельные синки, и " +
          "каждое решение фиксируется в репозитории — а не тонет в переписке.",

        step1Title: "Идея",
        step1Desc:
          "Созвон, цели, аудитория и конкуренты — чтобы решать " +
          "правильную задачу, а не просто красивую.",
        step1Deliv: "Бриф и объём работ",

        step2Title: "Структура",
        step2Desc:
          "Карта сайта, модель контента и пользовательские сценарии — " +
          "скелет, с которым должно соглашаться всё остальное.",
        step2Deliv: "Wireframes",

        step3Title: "Визуал",
        step3Desc:
          "Шрифты, цвет, отступы и тон закрепляются в токенах — " +
          "система, а не разовый набор экранов.",
        step3Deliv: "Design tokens",

        step4Title: "Интерфейс",
        step4Desc:
          "Детальные экраны для каждого брейкпоинта и состояния — " +
          "включая загрузку, пустые состояния и ошибки.",
        step4Deliv: "Кликабельный прототип",

        step5Title: "Код",
        step5Desc:
          "Семантичная вёрстка, компонентная архитектура, небольшие " +
          "коммиты для ревью — ни один фреймворк не берётся на веру.",
        step5Deliv: "Git history",

        step6Title: "Тест",
        step6Desc:
          "Проверка в разных браузерах, доступность и прогон " +
          "Lighthouse для сайтов — и тестовые сборки под каждую " +
          "целевую ОС для Electron-приложений.",
        step6Deliv: "Lighthouse 95+",

        step7Title: "Запуск",
        step7Desc:
          "Публикация на ваш хостинг или готовые к установке сборки " +
          "для Windows, macOS и Linux. CI/CD, мониторинг и короткий " +
          "документ передачи — чтобы вы не были привязаны только ко мне.",
        step7Deliv: "Сайт или установщик",

        contactTitle: "Есть<br><span class=\"accent\">проект?</span>",
        contactLead:
          "Напишите, что вам нужно: сайт, Web-приложение или " +
          "Desktop-программа на Electron. Достаточно пары строк. " +
          "Ответит сам разработчик, обычно в течение 12 часов.",
        contactOrderLabel: "Заказать проект",
        contactFollowLabel: "Блог и соцсети",
        contactEmailLabel: "Почта",
        contactBlogLabel: "Блог",

        footerDeveloperLabel: "РАЗРАБОТЧИК",

        pageTitle: "Fijman — Web и Electron разработка",
        metaDescription: "Fijman — разработка сайтов, Web-приложений и Desktop-приложений на Electron."
      }
    };

    // Язык уже определён в <head> (см. window.__fijmanLang)
    const currentLang =
      (window.__fijmanLang === "ru" || window.__fijmanLang === "en")
        ? window.__fijmanLang
        : "en";

    function applyTranslations(lang) {

      const dict = translations[lang] || translations.en;

      // Простые текстовые узлы
      document.querySelectorAll("[data-i18n]").forEach((element) => {
        const key = element.getAttribute("data-i18n");
        if (dict[key] !== undefined) {
          element.textContent = dict[key];
        }
      });

      // Узлы, где перевод содержит разметку (br, span.accent и т.д.)
      document.querySelectorAll("[data-i18n-html]").forEach((element) => {
        const key = element.getAttribute("data-i18n-html");
        if (dict[key] !== undefined) {
          element.innerHTML = dict[key];
        }
      });

      // Атрибуты (aria-label, alt и т.д.) через data-i18n-attr-<имя-атрибута>
      document.querySelectorAll("*").forEach((element) => {
        Array.from(element.attributes).forEach((attribute) => {
          if (attribute.name.indexOf("data-i18n-attr-") === 0) {
            const targetAttr = attribute.name.replace("data-i18n-attr-", "");
            const key = attribute.value;
            if (dict[key] !== undefined) {
              element.setAttribute(targetAttr, dict[key]);
            }
          }
        });
      });

      // <title> и meta description
      if (dict.pageTitle) {
        document.title = dict.pageTitle;
      }

      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription && dict.metaDescription) {
        metaDescription.setAttribute("content", dict.metaDescription);
      }

    }

    // Переводим страницу сразу, до отрисовки остального контента —
    // класс i18n-pending (см. <head>) держит body скрытым до этого момента
    applyTranslations(currentLang);
    document.documentElement.classList.remove("i18n-pending");


    /*
     * ДАННЫЕ ПРОЕКТОВ
     * -------------------------------------------------------
     * Секция Work берёт тексты и фото отсюда.
     * Замени записи на реальные проекты Fijman.
     * Порядок записей = порядок кнопок (data-project="0", "1", "2").
     */

    const projects = [
      {
        title: "Fijman",

        description:
          "The brand interface itself: a digital product built to demonstrate interaction, typography and technical craft.",

        tags: ["UI", "WEB", "INTERACTION"],

        status: "LIVE",
        type: "live",
        url: "https://fijman.tech",
        domain: "fijman.tech"
      },

      {
        title: "Configurator",

        description:
          "A project builder where package, services and visual direction become one interactive specification.",

        tags: ["PRODUCT", "LOGIC", "FORMS"],

        status: "SOON",
        type: "stub"
      },

      {
        title: "Gnezdino",

        description:
          "A restrained editorial web experience for a small forest apiary — the site below is the real, live thing, embedded straight from its own domain.",

        tags: ["BRAND", "APIARY", "WEB"],

        status: "LIVE",
        type: "live",
        url: "https://гнездино-пасека.рф/",
        domain: "гнездино-пасека.рф"
      }
    ];


    /*
     * ПЕРЕКЛЮЧАТЕЛЬ ПРОЕКТОВ (Live viewer)
     * -------------------------------------------------------
     * У проекта Gnezdino есть настоящий сайт — для него окно
     * показывает живой iframe в масштабе десктопа (сжатый под
     * размер окна через CSS transform: scale). У остальных
     * проектов сайта ещё нет — вместо фотографии-обманки
     * рисуется каркас страницы (скелетон), чтобы было понятно,
     * что это заглушка, а не реальный скриншот.
     *
     * По клику: подсвечиваем кнопку, гасим блок (0.16 с),
     * подменяем текст и содержимое окна, снова показываем.
     */

    const projectButtons =
      document.querySelectorAll(".project-button");

    const shotUrlText =
      document.querySelector("#shotUrlText");

    const shotOpen =
      document.querySelector("#shotOpen");

    const shotBody =
      document.querySelector("#shotBody");

    // Родительский блок задаёт реальную ширину окна — измеряем и
    // наблюдаем за НИМ, а не за shotBody, потому что scaleLiveFrame
    // сама меняет высоту shotBody, и если следить за ним же,
    // ResizeObserver будет дёргаться от собственных изменений JS
    const previewBox = shotBody.parentElement;

    // Единственное, что гаснет при смене проекта — содержимое просмотрщика
    const swapItems = [shotBody];


    // «Логический» размер, в котором рисуется сайт внутри iframe,
    // до того как его сожмут через transform: scale под ширину окна.
    // Десктопный вариант — обычный ноутбучный вьюпорт (1440×900).
    // Мобильный — размер настоящего смартфона (390×844, как у
    // современного iPhone), а не размер самого блока просмотра:
    // раньше именно это ломало показ на телефонах — сайт грузился
    // в вьюпорте произвольной маленькой ширины и его медиа-запросы
    // «не узнавали» мобильный layout.
    const FRAME_SIZES = {
      desktop: { width: 1440, height: 900 },
      mobile: { width: 390, height: 844 }
    };

    const MOBILE_BREAKPOINT = 640;

    // Подгоняет масштаб живого iframe под ширину окна и — это и есть
    // сам фикс — выставляет высоту окна ровно под масштабированный
    // фрейм. Раньше высота .shot-body жила отдельно (в CSS, от vh),
    // а масштаб — отдельно (в JS, от ширины блока), и как только
    // соотношение сторон блока не совпадало с 1440:900, сайт либо
    // обрезался снизу, либо оставлял под собой пустое поле.
    function scaleLiveFrame() {

      const frame = shotBody.querySelector(".frame-scale");

      if (!frame) {
        return;
      }

      const boxWidth = previewBox.clientWidth;

      if (!boxWidth) {
        return;
      }

      const isNarrow = boxWidth < MOBILE_BREAKPOINT;
      const size = isNarrow ? FRAME_SIZES.mobile : FRAME_SIZES.desktop;
      const scale = boxWidth / size.width;

      frame.style.width = `${size.width}px`;
      frame.style.height = `${size.height}px`;
      frame.style.transform = `scale(${scale})`;

      // Высота контейнера — это и есть высота масштабированного
      // фрейма, тютелька в тютельку. Никакой обрезки, никакой пустоты.
      shotBody.style.height = `${Math.round(size.height * scale)}px`;
      shotBody.style.setProperty("--frame-w", size.width);
      shotBody.style.setProperty("--frame-h", size.height);

    }


    // Рисует содержимое окна для конкретного проекта
    function renderShot(project) {

      if (project.type === "live") {

        shotUrlText.textContent = project.domain;
        shotOpen.href = project.url;
        shotOpen.classList.remove("is-disabled");
        shotOpen.removeAttribute("aria-disabled");

        const dict = translations[currentLang] || translations.en;

        shotBody.innerHTML = `
          <div class="frame-loading" id="frameLoading">
            <span class="spinner" aria-hidden="true"></span>
            ${dict.loadingLiveSite}
          </div>
          <div class="frame-scale">
            <iframe
              src="${project.url}"
              title="${project.title} — ${dict.liveSitePreviewSuffix}"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        `;

        const iframe = shotBody.querySelector("iframe");
        const loading = shotBody.querySelector("#frameLoading");

        iframe.addEventListener("load", () => {
          loading.classList.add("done");
        });

        scaleLiveFrame();

      } else {

        shotUrlText.textContent = `${project.title.toLowerCase()}.fijman.tech`;
        shotOpen.href = "#";
        shotOpen.classList.add("is-disabled");
        shotOpen.setAttribute("aria-disabled", "true");

        // Заглушка не привязана к масштабу iframe — сбрасываем
        // высоту, выставленную для «живого» проекта, назад к
        // дефолтной (aspect-ratio из CSS)
        shotBody.style.height = "";
        shotBody.style.removeProperty("--frame-w");
        shotBody.style.removeProperty("--frame-h");

        const dict = translations[currentLang] || translations.en;

        shotBody.innerHTML = `
          <div class="stub">
            <div class="stub-chrome" aria-hidden="true">
              <span></span><span></span><span></span>
            </div>
            <div class="stub-skeleton" aria-hidden="true">
              <div class="sk-line sk-w-40"></div>
              <div class="sk-block"></div>
              <div class="sk-line sk-w-70"></div>
              <div class="sk-line sk-w-50"></div>
              <div class="sk-row">
                <div class="sk-chip"></div>
                <div class="sk-chip"></div>
              </div>
            </div>
            <div class="stub-caption">
              <i class="bi bi-hourglass-split"></i>
              ${dict.livePreviewSoon}
            </div>
          </div>
        `;

      }

    }


    // Первичная отрисовка — сразу показываем активный проект (Gnezdino)
    renderShot(projects[2]);

    // Пересчитываем масштаб при изменении размеров окна просмотрщика.
    // Следим за previewBox (родителем), а не за shotBody — см. комментарий выше.
    window.addEventListener("resize", scaleLiveFrame);
    new ResizeObserver(scaleLiveFrame).observe(previewBox);


    projectButtons.forEach((button) => {

      button.addEventListener("click", () => {

        const number = Number(button.dataset.project);
        const project = projects[number];

        // Снимаем выделение со всех кнопок и ставим на нажатую
        projectButtons.forEach((item) => {
          item.classList.remove("active");
          item.removeAttribute("aria-current");
        });

        button.classList.add("active");
        button.setAttribute("aria-current", "true");


        // Гасим текущее содержимое
        swapItems.forEach((item) => {
          item.classList.add("is-swapping");
        });


        // Через 160 мс (когда всё погасло) подменяем содержимое окна
        setTimeout(() => {

          renderShot(project);

          // И плавно возвращаем
          swapItems.forEach((item) => {
            item.classList.remove("is-swapping");
          });

        }, 160);

      });

    });


    /*
     * MODAL «Start a project»: если он открыт из мобильного меню,
     * сворачиваем меню, чтобы оно не оставалось под окном.
     */
    const contactModal = document.querySelector("#contactModal");
    const modalMobileNav = document.querySelector("#mobileNav");

    contactModal.addEventListener("show.bs.modal", () => {
      if (modalMobileNav.classList.contains("show")) {
        bootstrap.Collapse.getOrCreateInstance(modalMobileNav).hide();
      }
    });


    // Чипы: выбранный тип проекта попадает в тему и текст письма
    const modalEmail = document.querySelector("#modalEmail");
    const modalChips = contactModal.querySelectorAll(".chip");

    function updateModalEmail() {

      const dict = translations[currentLang] || translations.en;
      const active = contactModal.querySelector(".chip.active");

      let href = "mailto:hello@fijman.tech";

      if (active) {
        const type = dict[active.dataset.chip];
        const subject = `${dict.modalMailSubject}: ${type}`;
        const body = dict.modalMailBody.replace("{type}", type);

        href += `?subject=${encodeURIComponent(subject)}` +
                `&body=${encodeURIComponent(body)}`;
      }

      modalEmail.href = href;

    }

    modalChips.forEach((chip) => {

      chip.addEventListener("click", () => {

        const wasActive = chip.classList.contains("active");

        modalChips.forEach((item) => {
          item.classList.remove("active");
          item.setAttribute("aria-pressed", "false");
        });

        if (!wasActive) {
          chip.classList.add("active");
          chip.setAttribute("aria-pressed", "true");
        }

        updateModalEmail();

      });

    });


    // Кнопка «скопировать почту»
    const modalCopy = document.querySelector("#modalCopy");
    let copyTimer = 0;

    modalCopy.addEventListener("click", async () => {

      try {
        await navigator.clipboard.writeText("hello@fijman.tech");
      } catch (error) {
        return;
      }

      const dict = translations[currentLang] || translations.en;
      const icon = modalCopy.querySelector(".bi");

      modalCopy.classList.add("copied");
      icon.className = "bi bi-check2";
      modalCopy.setAttribute("aria-label", dict.modalCopied);
      modalCopy.title = dict.modalCopied;

      clearTimeout(copyTimer);

      copyTimer = setTimeout(() => {
        modalCopy.classList.remove("copied");
        icon.className = "bi bi-copy";
        modalCopy.setAttribute("aria-label", dict.modalCopy);
        modalCopy.removeAttribute("title");
      }, 1800);

    });


    /*
     * LIVE RESULT: волны на canvas
     * -------------------------------------------------------
     * Функция draw() ниже — тот же код, что показан
     * в блоке «Under the hood». Меняешь здесь — поменяй и в листинге.
     */

    const canvas = document.querySelector("#waves");
    const ctx = canvas.getContext("2d");

    // Если в системе включено «уменьшить анимацию» — рисуем один статичный кадр
    const reduceMotion =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = 0;
    let height = 0;
    let mouseX = -9999; // положение курсора по X (за экраном = нет курсора)
    let frame = 0;      // id текущего кадра анимации

    // Подгоняем размер canvas под экран (чётко на Retina, но не больше x2)
    function resize() {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);

      width = canvas.clientWidth;
      height = canvas.clientHeight;

      canvas.width = width * ratio;
      canvas.height = height * ratio;

      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    }

    // Рисует один кадр: 22 волнистые линии, каждая закрашена
    // цветом фона, чтобы дальние линии скрывались за ближними
    function draw(time) {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < 22; i++) {
        ctx.beginPath();

        for (let x = -8; x <= width + 8; x += 8) {
          const wave = Math.sin(x / 46 + time / 900 + i / 3);
          const bump = Math.exp(-((x - mouseX) ** 2) / 6000) * 22;

          ctx.lineTo(x, 60 + i * 13 + wave * (6 + i / 2) - bump);
        }

        ctx.lineTo(width + 8, height + 20);
        ctx.lineTo(-8, height + 20);

        ctx.fillStyle = "#22272e";
        ctx.strokeStyle = `hsl(208 50% ${28 + i * 2.6}%)`;
        ctx.fill();
        ctx.stroke();
      }

      frame = requestAnimationFrame(draw);
    }

    function startWaves() {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(draw);
    }

    function stopWaves() {
      cancelAnimationFrame(frame);
    }

    // Один статичный кадр (для reduced-motion)
    function drawStill() {
      draw(0);
      stopWaves();
    }

    // Курсор / палец над волнами: запоминаем X
    canvas.addEventListener("pointermove", (event) => {
      mouseX = event.clientX - canvas.getBoundingClientRect().left;

      if (reduceMotion) {
        drawStill();
      }
    });

    // Курсор ушёл — волны успокаиваются
    canvas.addEventListener("pointerleave", () => {
      mouseX = -9999;

      if (reduceMotion) {
        drawStill();
      }
    });

    window.addEventListener("resize", () => {
      resize();

      if (reduceMotion) {
        drawStill();
      }
    });

    resize();

    // Анимация идёт только пока canvas виден на экране (экономит батарею)
    new IntersectionObserver((entries) => {

      entries.forEach((entry) => {

        if (reduceMotion) {
          drawStill();
        } else if (entry.isIntersecting) {
          startWaves();
        } else {
          stopWaves();
        }

      });

    }).observe(canvas);


    /*
     * ШАПКА: полоса прогресса и «плотная» плашка при прокрутке
     * -------------------------------------------------------
     * --progress (0..1) задаёт ширину полоски внизу шапки.
     * Обновляем не чаще одного раза за кадр.
     */

    const topbar = document.querySelector("#topbar");
    let topbarTicking = false;

    function updateTopbar() {
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress =
        maxScroll > 0
          ? Math.min(1, Math.max(0, window.scrollY / maxScroll))
          : 0;

      topbar.style.setProperty("--progress", progress.toFixed(4));
      topbar.classList.toggle("scrolled", window.scrollY > 24);

      topbarTicking = false;
    }

    window.addEventListener("scroll", () => {

      if (!topbarTicking) {
        topbarTicking = true;
        requestAnimationFrame(updateTopbar);
      }

    }, { passive: true });

    window.addEventListener("resize", updateTopbar);

    updateTopbar();


    /*
     * ШАПКА: подсветка пункта меню текущей секции (scrollspy)
     * -------------------------------------------------------
     * Активной считается секция, пересекающая линию
     * посередине экрана. На первом экране подсветки нет.
     */

    const navLinks =
      document.querySelectorAll(".navigation a, .mobile-nav-inner a");

    new IntersectionObserver(
      (entries) => {

        entries.forEach((entry) => {

          if (!entry.isIntersecting) {
            return;
          }

          navLinks.forEach((link) => {

            const isCurrent =
              link.getAttribute("href") === `#${entry.target.id}`;

            link.classList.toggle("active", isCurrent);

            if (isCurrent) {
              link.setAttribute("aria-current", "location");
            } else {
              link.removeAttribute("aria-current");
            }

          });

        });

      },
      {
        rootMargin: "-45% 0px -50% 0px"
      }
    ).observe(document.querySelector("#hero"));

    // Остальные секции подключаем к тому же принципу
    const spy = new IntersectionObserver(
      (entries) => {

        entries.forEach((entry) => {

          if (!entry.isIntersecting) {
            return;
          }

          navLinks.forEach((link) => {

            const isCurrent =
              link.getAttribute("href") === `#${entry.target.id}`;

            link.classList.toggle("active", isCurrent);

            if (isCurrent) {
              link.setAttribute("aria-current", "location");
            } else {
              link.removeAttribute("aria-current");
            }

          });

        });

      },
      {
        rootMargin: "-45% 0px -50% 0px"
      }
    );

    document
      .querySelectorAll("main > section[id]")
      .forEach((section) => {
        spy.observe(section);
      });


    /*
     * МОБИЛЬНОЕ МЕНЮ: закрываем после выбора пункта
     */

    const mobileNav = document.querySelector("#mobileNav");

    mobileNav.querySelectorAll("a").forEach((link) => {

      link.addEventListener("click", () => {
        bootstrap.Collapse.getOrCreateInstance(mobileNav).hide();
      });

    });


    /*
     * ТАЙМЛАЙН (Process)
     * -------------------------------------------------------
     * Когда блок впервые виден на 30% — добавляем класс play,
     * и точки с линией загораются по очереди (задержки в CSS).
     */

    const timeline = document.querySelector("#timeline");

    new IntersectionObserver(
      (entries, timelineObserver) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {
            timeline.classList.add("play");
            timelineObserver.disconnect();
          }

        });

      },
      {
        threshold: 0.3
      }
    ).observe(timeline);


    /*
     * ПОЯВЛЕНИЕ БЛОКОВ ПРИ ПРОКРУТКЕ
     * -------------------------------------------------------
     * Каждому элементу с классом .reveal, когда он попадает
     * в экран, добавляется .visible (см. CSS).
     */

    const observer =
      new IntersectionObserver(
        (entries) => {

          entries.forEach((entry) => {

            if (entry.isIntersecting) {
              const target = entry.target;

              target.classList.add("visible");

              // Задержка нужна только на время появления —
              // убираем, чтобы она не влияла на hover-эффекты
              setTimeout(() => {
                target.style.removeProperty("--reveal-delay");
              }, 1600);
            }

          });

        },
        {
          threshold: 0.12
        }
      );


    document
      .querySelectorAll(".reveal")
      .forEach((element) => {

        // Каскад: порядковый номер среди соседей с .reveal
        const group = Array.from(element.parentElement.children)
          .filter((child) => child.classList.contains("reveal"));

        const index = group.indexOf(element);

        if (index > 0) {
          element.style.setProperty(
            "--reveal-delay",
            `${Math.min(index, 5) * 90}ms`
          );
        }

        observer.observe(element);
      });


    /*
     * КОД «ПЕЧАТАЕТСЯ» ПРИ ПРОКРУТКЕ
     * -------------------------------------------------------
     * Блок 4 (waves.js) и блок 6 (contact.json): когда листинг
     * появляется на экране, он набирается по символам — каждый
     * своим темпом. Подсветка синтаксиса (span-ы) сохраняется.
     *
     * Ещё не напечатанный текст остаётся в разметке под классом
     * .code-pending (visibility: hidden), поэтому высота и
     * ширина окна с самого начала правильные — ничего не прыгает.
     * Печатается один раз для каждого блока.
     */

    function setupTypewriter(pre, unitsPerSecond) {

      const code = pre.querySelector("code");

      // Все текстовые узлы листинга — собираем до любых изменений
      const walker = document.createTreeWalker(code, NodeFilter.SHOW_TEXT);
      const textNodes = [];

      while (walker.nextNode()) {
        if (walker.currentNode.nodeValue.length > 0) {
          textNodes.push(walker.currentNode);
        }
      }

      // Каждый узел делим на «напечатанное» и скрытый хвост
      const parts = textNodes.map((node) => {

        const hidden = document.createElement("span");
        hidden.className = "code-pending";
        hidden.textContent = node.nodeValue;

        const full = node.nodeValue;

        node.nodeValue = "";
        node.parentNode.insertBefore(hidden, node.nextSibling);

        return { node, hidden, full };

      });

      // «Стоимость» символов: перенос строки даёт небольшую паузу
      const cumulative = [0];

      parts.forEach((part) => {
        for (const char of part.full) {
          cumulative.push(cumulative[cumulative.length - 1] + (char === "\n" ? 6 : 1));
        }
      });

      const total = cumulative.length - 1;

      // Курсор: берём готовый (contact.json) или создаём
      let caret = code.querySelector(".code-caret");

      if (!caret) {
        caret = document.createElement("span");
        caret.className = "code-caret";
        caret.setAttribute("aria-hidden", "true");
        code.appendChild(caret);
      }

      let lastPart = null;

      function render(count) {

        let offset = 0;
        let current = null;

        parts.forEach((part) => {

          const shown = Math.max(0, Math.min(part.full.length, count - offset));

          part.node.nodeValue = part.full.slice(0, shown);
          part.hidden.textContent = part.full.slice(shown);

          if (shown > 0) {
            current = part;
          }

          offset += part.full.length;

        });

        // Курсор идёт за последним напечатанным символом
        if (current !== lastPart) {

          lastPart = current;

          if (current) {
            current.node.after(caret);
          } else {
            parts[0].node.before(caret);
          }

        }

      }

      function finish() {

        parts.forEach((part) => {
          part.node.nodeValue = part.full;
          part.hidden.remove();
        });

        parts[parts.length - 1].node.after(caret);
        caret.classList.remove("typing");

      }

      function play() {

        const start = performance.now();
        let count = 0;

        caret.classList.add("typing");

        function tick(now) {

          const units = ((now - start) / 1000) * unitsPerSecond;

          while (count < total && cumulative[count + 1] <= units) {
            count++;
          }

          if (count >= total) {
            finish();
            return;
          }

          render(count);
          requestAnimationFrame(tick);

        }

        requestAnimationFrame(tick);

      }

      render(0);

      // Запускаем один раз, когда листинг заметно показался на экране
      const typingObserver = new IntersectionObserver(
        (entries) => {

          if (entries.some((entry) => entry.isIntersecting)) {
            typingObserver.disconnect();
            setTimeout(play, 250);
          }

        },
        {
          threshold: 0.25,
          rootMargin: "0px 0px -10% 0px"
        }
      );

      typingObserver.observe(pre);

    }

    // При «уменьшить анимацию» код сразу показывается целиком
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {

      const waveListing = document.querySelector("#code pre.code");
      const contactListing = document.querySelector("#contact pre.code");

      if (waveListing) {
        setupTypewriter(waveListing, 200);
      }

      if (contactListing) {
        setupTypewriter(contactListing, 100);
      }

    }
