// tslint:disable
// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreateLore = /* GraphQL */ `
  subscription OnCreateLore($owner: String!) {
    onCreateLore(owner: $owner) {
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
export const onUpdateLore = /* GraphQL */ `
  subscription OnUpdateLore($owner: String!) {
    onUpdateLore(owner: $owner) {
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
export const onDeleteLore = /* GraphQL */ `
  subscription OnDeleteLore($owner: String!) {
    onDeleteLore(owner: $owner) {
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
export const onCreateStory = /* GraphQL */ `
  subscription OnCreateStory($owner: String!) {
    onCreateStory(owner: $owner) {
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
export const onUpdateStory = /* GraphQL */ `
  subscription OnUpdateStory($owner: String!) {
    onUpdateStory(owner: $owner) {
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
export const onDeleteStory = /* GraphQL */ `
  subscription OnDeleteStory($owner: String!) {
    onDeleteStory(owner: $owner) {
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
