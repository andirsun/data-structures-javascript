class Washmachine:
  def __init__ (self):
    pass
  
  def wash (self, temperature='cold'):
    self._fill_water_tank (temperature)
    self._add_soap ()
    self._wash ()
    self._centrifuge ()
  
  def _fill_water_tank (self, temperature):
    print (f'Filling the tank with {temperature} water')

  def _add_soap (self):
    print ('Adding Soap')
  
  def _wash (self):
    print ('Washing')
  
  def _centrifuge (self):
    print ('Centrifugating...')
  
if __name__ == '__main__' :
  washmachine = Washmachine ()
  washmachine.wash ()