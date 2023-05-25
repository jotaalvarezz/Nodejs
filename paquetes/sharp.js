const sharp = require('sharp')

sharp('vue.png').resize(200).grayscale().toFile('resized.png')