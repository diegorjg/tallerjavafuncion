module.exports = function(namespace) {
    return module.exports.log.bind(module.exports, namespace)
  } 