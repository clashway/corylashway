import { createNetworkInterface } from 'apollo-client'

export default ({ store }) => {
  const networkInterface = createNetworkInterface({
    uri: 'https://api-useast.graphcms.com/v1/cjj7ktkop05ko01eewnwsndlr/master'
  })

  // const logErrors = {
  //   applyAfterware ({ response }, next) {
  //     if (!response.ok) {
  //       response.clone().text().then(bodyText => {
  //         console.error(`Network Error: ${response.status} (${response.statusText}) - ${bodyText}`)
  //         next()
  //       })
  //     } else {
  //       response.clone().json().then(({ errors }) => {
  //         if (errors) {
  //           console.error('GraphQL Errors:', errors.map(e => e.message))
  //         }
  //         next()
  //       })
  //     }
  //   }
  // }

  // networkInterface.useAfter([logErrors])

  return networkInterface
}
