# Etch-A-Sketch

Use potentiometers to draw on a webpage!

By Jim Alexander

## Hardware Required

- Arduino Uno
- (2x) Potentiometers
- breadboard

## Guide

1. `git clone https://github.com/Xero-0/Etch-A-Sketch.git`
2. `cd etch-a-sketch`
3. `npm install`
4. Plug arduino into usb port
5. Connect potentiometers to analog pin 0 and 1 (ground and supply 5v)
6. in server.js file - change 'usb_location' variable with your arduino serialport location. [Learn More](https://www.digikey.com.au/en/maker/blogs/2018/how-to-get-started-with-arduino)
7. `npm start`
8. Open public/index.html as web page
   <!--

## Notes

1. Rasberry pi server hosting

- https://weworkweplay.com/play/raspberry-pi-nodejs/ -->
