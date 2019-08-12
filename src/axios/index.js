import service from './service'
import apiList from './api'
const list = Object.entries(apiList).reduce(
  (r, [method, api]) => ({
    ...r,
    ...Object.entries(api).reduce(
      (r2, [name, path]) => ({
        ...r2,
        [name.replace(/^api/, 'serve')](data = {}, config = {}) {
          // 路径中如果存在{}，按同名规则将data中属性替换到路径，只保留data中存在的属性
          const regex = /{([\s\S]+?)}/g
          const keys = _.chain(data)
            .omitBy(value => _.isNil(value))
            .keys()
            .map(x => `{${x}}`)
            .value()
          _.chain(path)
            .words(regex)
            .difference(keys)
            .forEach(x => {
              path = _.replace(path, `/${x}`, '')
            })
            .value()
          _.templateSettings.interpolate = regex
          const compiled = _.template(path)(data)
          return service[method](compiled, data, config)
        }
      }),
      {}
    )
  }),
  {}
)
export default list