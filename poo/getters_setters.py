class BallotBox:
    
  def __init__ (self, identifier, country):
    self._identifier = identifier
    self._country = country
    self._region = None

  @property
  def region (self):
    return self._region

  @region.setter
  def region (self, region):
    if region in self._country:
      self._region = region
    else:
      raise ValueError (f'La region {region} no esta en la lista')
      

box = BallotBox (123, ['Colombia','Valle'])
print (box.region)
box.region = 'Colombia'
print (box.region)