# Divide a problem in small problems  (divide and conquer)
class Car:
  def __init__ (self, model, brand, color):
    self.model = model
    self.brand = brand
    self.color = color
    # private atribute
    self._state = 'stoped'
    # Define a private atributte as sub-class with their own implementations and properties
    self._engine = Engine (valves = 4)

  def accelerate (self, type='slow'):
    if type == 'fast':
      self._engine.inject_fuel (10)
    else :
      self._engine.inject_fuel (3)


class Engine:
  def __init__ (self, valves, type='fuel'):
    self.valves = valves
    self.type = type
    self.temperature = 0

  def inject_fuel (self, quantity):
    '''
    write your own implementation
    '''
    pass    
