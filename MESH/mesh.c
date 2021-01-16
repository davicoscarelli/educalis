#include <WiFi.h>
#include <WebServer.h>

#include "SD_MMC.h"

const char* ssid = "Educalis Wi-fi";  
const char* password = "12345678";  

IPAddress local_ip(192,168,1,1);
IPAddress gateway(192,168,1,1);
IPAddress subnet(255,255,255,0);

WebServer server(80);

void setup() {

    WiFi.softAP(ssid, password);
    WiFi.softAPConfig(local_ip, gateway, subnet);
    delay(100);

    SD_MMC.begin()

    server.on("/", handle_OnConnect);

    server.onNotFound(handle_NotFound);

    server.begin();

}

void loop() {
  server.handleClient();
}

void handle_OnConnect() {
  server.send(200, "text/html", SendHTML()); 
}

void handle_NotFound(){
  server.send(404, "text/plain", "Página não encontrada");
}

String SendHTML(){
 File source = SD_MMC.open("/Interface/index.html", FILE_READ);
 return source.read()
}