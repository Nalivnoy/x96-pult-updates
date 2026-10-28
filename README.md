# X96 Remote / X96 Пульт

[English](#english) · [Русский](#русский)

## English

Control a compatible Android TV box from a phone, tablet or computer browser. The remote runs on the TV box and works inside your home network. Internet is needed for downloads, updates and optional remote assistance. Ordinary home-network control works locally.

### Install without a USB drive

Short address to type on the TV: **[nalivnoy.github.io/x96](https://nalivnoy.github.io/x96/)**

**Open [the installation page](https://nalivnoy.github.io/x96/) in the browser on the TV box**, then choose **Download APK**. The button always downloads the latest stable version.

[Download the latest APK directly](https://github.com/Nalivnoy/x96-pult-updates/releases/latest/download/X96-Pult.apk) · [All releases and installation archive](https://github.com/Nalivnoy/x96-pult-updates/releases/latest)

1. Download the APK on the TV box. If you open the link on a phone or computer, the file downloads to that device; it does not install on the TV automatically. You can transfer the downloaded file to the TV box with your existing file-transfer tool.
2. Open the APK from the browser's Downloads or the TV box's file manager. If Android asks, allow that browser or file manager to install apps, then confirm installation.
3. Open **X96 Пульт** on the TV. Follow **Настройка** (Setup) to enable the debugging access required by your firmware, then press **Запустить** (Start). Wait until the remote is ready.
4. Connect your phone, tablet or computer to the same accessible home network. Scan the QR code on the TV or enter the displayed local address in a browser, then enter the pairing code shown on the TV.

The APK is installed **on the TV box**. Your phone, tablet and computer only need a browser. The QR code inside the installed TV app opens the local remote; it is separate from the app download page.

### Update on the TV

From version **1.5.1**, open the TV app → **Обновления** (Updates).

1. If a new version is available, choose **Скачать обновление** (Download update).
2. The app downloads and verifies the APK. If shown, choose **Разрешить установку** (Allow installation), enable the permission for X96 Пульт, then return to the app.
3. Choose **Установить обновление** (Install update) and confirm the Android installer. Reopen X96 Пульт after installation if needed.

The app also checks when its TV window opens, with a six-hour interval after a successful check. **Проверить ещё раз** (Check again) checks immediately. Downloads and installation start only after you choose them. Internet is required for updates.

**Keep the installed app: install updates over it, without uninstalling.** Your pairing code, connected browsers and settings are preserved. If your old version has no Updates button, install the latest APK using the installation page once; subsequent updates work from the TV app. The same page can also update an existing installation manually.

### Remote assistance over the internet · version 1.6.0

1. On the TV, open **Удалённая помощь** (Remote assistance). On first use, allow the visible indicator over other apps, then return and choose **Создать сеанс** (Create session).
2. Tell your trusted helper the 16-character session code. The helper opens **[nalivnoy.github.io/x96/help](https://nalivnoy.github.io/x96/help/)** on a phone, tablet or computer, enters the code and their name.
3. On the TV, check the name and choose **Разрешить подключение** (Allow connection). Until you confirm, the helper gets neither the screen nor control.
4. The helper can view the screen (approximately one JPEG image per second), use remote buttons, enter text and launch apps. Audio stays on the TV. The TV shows an indicator with **Завершить** (End); either side can end the session.

Each session lasts at most 30 minutes, allows one helper, and requires fresh TV consent. Lost communication ends access; sessions do not resume automatically or start on boot. The code is separate from your home-network pairing PIN. Give it only to the person you want to help you.

The relay runs as a separate service on the project's existing server. Other users need no server account, always-on PC at home, port forwarding or subscription. The TV initiates the connection over HTTPS/WSS; it can work with ByeByeDPI running. If using a VPN, keep local-network access enabled. Internet connectivity to the relay is required on both devices.

Frames and commands use AES-GCM encryption between the TV and browser. The relay keeps authentication hashes, expiry and a temporary closed-session marker in memory, not screen images or commands. The code and encryption keys are kept only for the session. Server restart ends current sessions. Hosting uses existing server resources; no new paid service was added. Availability depends on that server, its network and the free DNS service. Cloudflare was tested but is not used for the released relay because direct connections from the tested ISP stalled.

### Compatibility and access

- Android **8.0 or newer**. Fully tested on **X96Q, slimBOXtv ATV 10.11 / Android 10**. Other devices and firmware need their own compatibility check.
- On the tested firmware, **USB debugging** also enables the ADB TCP port **5555** used by the controller. Other firmware may need additional network ADB setup. Modern wireless debugging pairing by code/QR is not supported yet. Installing the APK alone may not enable control.
- The visible mouse cursor requires UHID support. Protected video may not appear in screen sharing.
- Use a trusted home network: debugging grants extended device access, and the web pairing code does not protect the raw ADB port. Allow local network access in your VPN or exclude X96 Пульт from it if required.
- Each TV box has its own address and pairing code. Your TV box must be on and reachable from the controlling device.

### Features

Remote buttons, a touchpad without video, text input, app launching with favorites and frequently launched apps, screenshots, optional live screen sharing, and a list of paired browser connections. Favorites and launch counts are saved separately in each browser. Video starts only when requested; audio stays on the TV.

### Downloads and licensing

This repository hosts release APKs, installation archives, the update feed, this guide and the installation page. APK download size, SHA-256, package, version and signing certificate are checked before an in-app update. Build keys, personal settings and pairing codes are not published.

Third-party components: [scrcpy 5.0.1](https://github.com/Genymobile/scrcpy/tree/v5.0.1) and [ZXing Core 3.5.4](https://github.com/zxing/zxing/releases/tag/zxing-3.5.4), Apache License 2.0. OkHttp 4.12.0, Okio 3.6.0 and Kotlin standard library 1.9.10 are also included under Apache License 2.0. Their licenses are included in the APK and the installation archive.

---

## Русский

Управление совместимой Android-приставкой из браузера телефона, планшета или компьютера. Пульт работает на самой приставке внутри домашней сети. Интернет нужен для скачивания, обновлений и удалённой помощи по запросу. Обычный домашний пульт работает локально.

### Установка без флешки

Короткий адрес для ввода на телевизоре: **[nalivnoy.github.io/x96](https://nalivnoy.github.io/x96/)**

**Откройте [страницу установки](https://nalivnoy.github.io/x96/) в браузере самой приставки** и нажмите **«Скачать APK»**. Кнопка всегда скачивает последнюю стабильную версию.

[Скачать последний APK напрямую](https://github.com/Nalivnoy/x96-pult-updates/releases/latest/download/X96-Pult.apk) · [Все выпуски и установочный архив](https://github.com/Nalivnoy/x96-pult-updates/releases/latest)

1. Скачайте APK на приставку. При открытии ссылки на телефоне или компьютере файл скачивается туда, а не устанавливается на телевизор автоматически. Можно передать скачанный файл на приставку вашим обычным средством передачи файлов.
2. Откройте APK из «Загрузок» браузера или через файловый менеджер приставки. Если Android попросит, разрешите установку этому браузеру или файловому менеджеру, затем подтвердите установку.
3. Откройте **«X96 Пульт»** на телевизоре. Кнопка **«Настройка»** объясняет, как включить доступ отладки, необходимый на вашей прошивке. Нажмите **«Запустить»** и дождитесь готовности пульта.
4. Подключите телефон, планшет или компьютер к доступной домашней сети. Отсканируйте QR-код на телевизоре или введите показанный локальный адрес в браузере, затем введите код привязки с телевизора.

APK устанавливается **на приставку**. На телефоне, планшете и компьютере достаточно браузера. QR-код внутри установленного приложения открывает локальный пульт; это отдельный адрес, не страница скачивания APK.

### Обновление с телевизора

Начиная с версии **1.5.1**, откройте приложение на телевизоре → **«Обновления»**.

1. Если доступна новая версия, нажмите **«Скачать обновление»**.
2. Дождитесь скачивания и проверки APK. Если появилась кнопка **«Разрешить установку»**, нажмите её, включите разрешение для «X96 Пульта» и вернитесь назад.
3. Нажмите **«Установить обновление»** и подтвердите установку Android. При необходимости откройте пульт снова после установки.

Приложение проверяет версии и при открытии окна на телевизоре, с интервалом шесть часов после успешной проверки. **«Проверить ещё раз»** запускает проверку сразу. Скачивание и установка начинаются только по кнопке. Для обновления нужен интернет.

**Устанавливайте обновления поверх прежней версии, не удаляя приложение.** Код, привязанные браузеры и настройки сохранятся. Если в старой версии нет кнопки «Обновления», один раз установите последний APK со страницы установки. Следующие версии будут доступны в самом приложении. Этой же страницей можно пользоваться для ручного обновления уже установленного пульта.

### Удалённая помощь через интернет · версия 1.6.0

1. На телевизоре откройте **«Удалённая помощь»**. В первый раз разрешите показ индикатора поверх приложений, вернитесь назад и нажмите **«Создать сеанс»**.
2. Назовите доверенному помощнику код из 16 символов. Помощник открывает **[nalivnoy.github.io/x96/help](https://nalivnoy.github.io/x96/help/)** на телефоне, планшете или компьютере, вводит код и своё имя.
3. На телевизоре проверьте имя и нажмите **«Разрешить подключение»**. До подтверждения экран и управление недоступны.
4. Помощник видит экран (примерно один снимок JPEG в секунду), нажимает кнопки пульта, вводит текст и запускает приложения. Звук остаётся на телевизоре. На телевизоре виден индикатор с кнопкой **«Завершить»**; отключиться можно с любой стороны.

Один сеанс — один помощник, до 30 минут, с новым подтверждением на телевизоре. При потере связи доступ завершается. После перезагрузки или обрыва помощь сама не возобновляется. Это отдельный код, не PIN домашнего пульта. Сообщайте его только человеку, которому хотите дать доступ.

Сервер связи работает отдельным сервисом на уже имеющемся сервере проекта. Другим владельцам не нужны аккаунт сервера, постоянно включённый домашний компьютер, проброс портов или подписка. Приставка сама подключается по HTTPS/WSS; можно пользоваться с включённым ByeByeDPI. Если используете VPN, сохраните доступ к домашней сети. Интернет с доступом к серверу помощи нужен на обоих устройствах.

Кадры и команды зашифрованы AES-GCM между приставкой и браузером. Сервер держит в памяти хеши для проверки доступа, время завершения и временную отметку закрытого сеанса; изображения и команды не сохраняются. Код и ключи шифрования существуют только на время сеанса. Перезапуск сервера завершает текущие сеансы. Новых платных услуг не подключали: используются ресурсы существующего сервера. Доступность зависит от его работы, сети и бесплатного DNS-сервиса. Cloudflare проверен, но в выпущенном варианте не используется: прямое соединение через проверенного провайдера зависало.

### Совместимость и доступ

- Android **8.0 или новее**. Полностью проверена **X96Q со slimBOXtv ATV 10.11 / Android 10**. Другие модели и прошивки требуют отдельной проверки.
- На проверенной прошивке **«Отладка по USB»** также включает ADB TCP на порту **5555**, который использует управление. На другой прошивке может понадобиться дополнительная настройка сетевого ADB. Современное сопряжение беспроводной отладки по коду/QR пока не поддерживается. Одной установки APK может быть недостаточно для управления.
- Для видимого курсора нужна поддержка UHID. Защищённое видео может не отображаться при трансляции экрана.
- Используйте доверенную домашнюю сеть: отладка даёт расширенный доступ к устройству, а код веб-пульта не защищает сам порт ADB. При необходимости разрешите локальную сеть в VPN или исключите из него «X96 Пульт».
- У каждой приставки свой адрес и код привязки. Приставка должна быть включена и доступна управляющему устройству.

### Возможности

Кнопки пульта, тачпад без видео, ввод текста, запуск приложений с избранным и часто запускаемыми, снимки экрана, живой экран по запросу и список привязанных браузеров. Избранное и частота запусков сохраняются отдельно в каждом браузере. Видео включается только по запросу; звук остаётся на телевизоре.

### Загрузки и лицензии

Репозиторий содержит готовые APK, установочные архивы, сведения об обновлении, эту инструкцию и страницу установки. Перед обновлением приложение проверяет размер APK, SHA-256, пакет, версию и подпись. Ключи сборки, личные настройки и коды привязки не публикуются.

Сторонние компоненты: [scrcpy 5.0.1](https://github.com/Genymobile/scrcpy/tree/v5.0.1) и [ZXing Core 3.5.4](https://github.com/zxing/zxing/releases/tag/zxing-3.5.4), Apache License 2.0. Также используются OkHttp 4.12.0, Okio 3.6.0 и стандартная библиотека Kotlin 1.9.10 (Apache License 2.0). Лицензии включены в APK и установочный архив.
