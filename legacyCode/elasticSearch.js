const images = [
  {
    url: 'https://cdn.steemitimages.com/DQmZPi8epjt1qaEJrQzYs5p3K4FJgJNzvcyHjnep14C1ArF/Steemian.app%20profile%20picture%201.jpg',
    steemitLink: '![Steemian.app profile picture 1.jpg](https://cdn.steemitimages.com/DQmZPi8epjt1qaEJrQzYs5p3K4FJgJNzvcyHjnep14C1ArF/Steemian.app%20profile%20picture%201.jpg)',
    tags: ['logo', 'steemian', 'app', 'design'],
  },
  {
    url: 'https://cdn.steemitimages.com/DQmZPi8epjt1qaEJrQzYs5p3K4FJgJNzvcyHjnep14C1ArF/Steemian.app%20profile%20picture%201.jpg',
    steemitLink: '![Steemian.app profile picture 1.jpg](https://cdn.steemitimages.com/DQmZPi8epjt1qaEJrQzYs5p3K4FJgJNzvcyHjnep14C1ArF/Steemian.app%20profile%20picture%201.jpg)',
    tags: ['logo', 'steemians', 'apps', 'designs'],
  }
];

function createIndex(imageObjectArray) {
  let index = {imageIndex: {}, tagIndex: {}};
  // Create imageIndex
  for (let image of imageObjectArray) {
    for (let tag of image.tags) {
      if (index.imageIndex[tag] === undefined) {
        index.imageIndex[tag] = [image];
      }
      else if (index.imageIndex[tag].indexOf(image) === -1) {
        index.imageIndex[tag].push(image);
      }
    }
  }
  // Create tagIndex
  // For each tag
  for (let tag of Object.keys(index.imageIndex)) {
    // For each letterIndex in tag
    for (let i of tag.split('').keys()) {
      let key = tag.substr(0, i+1);
      if (index.tagIndex[key] === undefined) {
        index.tagIndex[key] = [tag];
      }
      else if (index.tagIndex[key].indexOf(tag) === -1) {
        index.tagIndex[key].push(tag);
      }
    }
  }
  return index;
}

/** Returns the images matching the search */
function elasticSearch(searchInput, index) {
  const tags = index.tagIndex[searchInput] || [];
  return tags.map(tag => index.imageIndex[tag]) || [];
}

const index = createIndex(images);
console.log(elasticSearch('s', index));
elasticSearch('s', index);