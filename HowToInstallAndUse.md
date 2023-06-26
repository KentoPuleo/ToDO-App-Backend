## Backend
Dies ist ein Projekt welches ich über die letzten Wochen erarbeitet habe. Es dient als Backend für eine ToDo-Applikation welche ich auch bereits auf Docker gestellt habe.  Ich habe hier mit Nest JS gearbeitet und eine MySQL Datenbank verwendet.

## Docker
Zunächst müssen Sie Docker von der offiziellen Website herunterladen: https://www.docker.com/get-started/. Wenn Sie die Datei heruntergeladen und das Docker Desktop-Installationsprogramm geöffnet haben, müssen Sie die Option Enable WSL 2 Windows Features (WSL 2-Windows-Funktionen aktivieren) wählen, woraufhin Docker Desktop installiert wird. Nach der erfolgreichen Installation müssen Sie Ihren Computer neu starten.
Danach wird ein Fenster mit der Überschrift "WSL2 installation is incomplete" angezeigt. Klicken Sie auf den Link in dem Fenster und laden Sie WSL2-Linux-Kernal herunter. Nach dem Download öffnen Sie die Datei für eine schnelle Installation. Anschließend müssen Sie Ihren Computer neu starten.
Nach dem Neustart können Sie Docker Desktop öffnen und müssen die Einstellungen "Ressourcen WSL Integration" aktivieren.
In der Windows PowerShell müssen Sie den Befehl WSL --set-default-version 2 ausführen. Dann müssen Sie aus dem Microsoft Shop Ubuntu herunterladen. Nach der Installation öffnen Sie eine Linux-Shell und erstellen Sie einen Benutzer mit einem eindeutigen Kennwort. In Docker Desktop gehen Sie zu Docker Settings → Resources -> WSL Integration, klicken auf Refresh und wählen Ubuntu aus.
## VS-Code
Um dieses Repository nutzen zu können, benötigen Sie VS-Code. Wenn Sie ihn nicht haben, laden Sie ihn von https://code.visualstudio.com/ herunter. Hier sind einige Erweiterungen, die Sie benötigen, und einige Empfehlungen:

Docker
Dev Container
Spring Boot Tools
GitHub
Code-Läufer

Nachdem Sie alle Erweiterungen installiert haben, klicken Sie auf die Schaltfläche "Git Repository klonen", um alle Dateien aus diesem GitHub Repository zu klonen. Danach sehen Sie in der linken unteren Ecke einen grünen Button. Wenn Sie darauf klicken, öffnet sich oben in der Mitte ein Menü mit verschiedenen Befehlen. Hier können Sie auf den Befehl Reopen Dev Container klicken. Danach richtet Docker die Container, Images und Volumes ein, die Sie benötigen. Danach können Sie mit der Programmierung der Datenbank Library/ Bibliothek beginnen.
Ich hoffe, diese Anleitung konnte Ihnen helfen, alles einzurichten, was Sie zum Starten des Dev Containers benötigen.

