void setup()
{
  Serial.begin(9600);
}

void loop()
{
  //Reads analog pin data
  int sensorValue_00 = analogRead(A0);
  int sensorValue_01 = analogRead(A1);

  //Writes pin data in one line to serial with space seporator.
  Serial.print(sensorValue_00);
  Serial.print(" ");
  Serial.println(sensorValue_01);

  // Delay in between reads for stability
  delay(500);
}
