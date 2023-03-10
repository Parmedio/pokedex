const getEmoji = (arg) => {
  for (let i = 0; i< typeReferenceMaster.length; i++) {
    if (arg === typeReferenceMaster[i][0]) {
      return typeReferenceMaster[i][1]
    }
  }
}

const getLightColor = (arg) => {
  for (let i = 0; i< typeReferenceMaster.length; i++) {
    if (arg === typeReferenceMaster[i][0]) {
      return typeReferenceMaster[i][2]
    }
  }
}

const getBoldColor = (arg) => {
  for (let i = 0; i< typeReferenceMaster.length; i++) {
    if (arg === typeReferenceMaster[i][0]) {
      return typeReferenceMaster[i][3]
    }
  }
}

const typeReferenceMaster = [
  ['fire', 'đĨ', '#ff7a7a', '#ff4d4d'],
  ['flying', 'đĒļ', '#d4d4d4', '#a3a3a3'],
  ['water', 'đ§', '#99ddff', '#42d0ff'],
  ['grass', 'đŗ', '#83e97c', '#52cb66'],
  ['poison', 'â ī¸', '#c37ce9', '#ab52cb'],
  ['bug', 'đĒ˛', '#61ae6e', '#ca8102'],
  ['dark', 'đ', '#34304b', '#3d2424'],
  ['dragon', 'đ˛', '#62a78d', '#408b2d'],
  ['electric', 'âĄ', '#ffe894', '#fbff0a'],
  ['fairy', 'đĒ', '#9af4cd', '#da48e5'],
  ['fighting', 'đĨ', '#eaa52e', '#ff2e2e'],
  ['ghost', 'đģ', '#d178f2', '#403d76'],
  ['ground', 'â°ī¸', '#887e6d', '#88593a'],
  ['ice', 'âī¸', '#fafafa', '#8ae2ff'],
  ['psychic', 'đ', '#fd955d', '#ff8af5'],
  ['rock', 'đĒ¨', '#8c8c8c', '#4c4c57'],
  ['normal', 'âī¸', '#ecf5a3', '#d0ac49'],
  ['steel', 'âī¸', '#b1bfce', '#4b727c']
]

export { getEmoji, getLightColor, getBoldColor};
