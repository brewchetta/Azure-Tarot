import majorArcana from './major-arcana'
import cups from './cups'
import pentacles from './pentacles'
import swords from './swords'
import wands from './wands'

const cardsList = {
  majorArcana,
  cups,
  pentacles,
  swords,
  wands,
  all: [...majorArcana, cups, pentacles, swords, wands].flat()
}

export default cardsList
