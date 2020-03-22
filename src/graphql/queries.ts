// tslint:disable
// eslint-disable
// this is an auto generated file. This will be overwritten

export const getLore = /* GraphQL */ `
  query GetLore($id: ID!) {
    getLore(id: $id) {
      id
      name
      stories {
        items {
          id
          text
          loreID
          owner
        }
        nextToken
      }
      owner
    }
  }
`;
export const listLores = /* GraphQL */ `
  query ListLores(
    $filter: ModelLoreFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLores(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        stories {
          nextToken
        }
        owner
      }
      nextToken
    }
  }
`;
export const getStory = /* GraphQL */ `
  query GetStory($id: ID!) {
    getStory(id: $id) {
      id
      text
      loreID
      lore {
        id
        name
        stories {
          nextToken
        }
        owner
      }
      owner
    }
  }
`;
export const listStorys = /* GraphQL */ `
  query ListStorys(
    $filter: ModelStoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStorys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        text
        loreID
        lore {
          id
          name
          owner
        }
        owner
      }
      nextToken
    }
  }
`;
