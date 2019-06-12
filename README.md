# Arduino Etch-A-Sketch

Use potentiometers to draw on a webpage!

This is fun project to gain an understanding of arduinos, nodejs, websockets and p5js

Built with 💖 by [@JimAlexander](https://www.instagram.com/jimalexander/)

## Hardware Required

- Arduino Uno
- (2x) Potentiometers
- breadboard

## Software Required

- Nodejs [Download](https://nodejs.org/en/)
- Arduino IDE [Download](https://www.arduino.cc/en/Main/Software)

## Guide

1. `git clone https://github.com/Xero-0/Etch-A-Sketch.git`
2. `cd etch-a-sketch`
3. `npm install`
4. Wire arduino as per: https://www.circuito.io/app?components=512,9939,9939,11021 (Analog pins 0 and 1 instead of 1 and 3 )
5. Plug arduino into usb port
6. Upload BoardFile.ino to Arduino
7. in server.js file - change 'usb_location' variable with your arduino serialport location. [Learn More](https://www.digikey.com.au/en/maker/blogs/2018/how-to-get-started-with-arduino)
8. `npm start`
9. Open public/index.html as web page
10. Draw!
   <!--

## Notes

1. Rasberry pi server hosting

- https://weworkweplay.com/play/raspberry-pi-nodejs/ -->
