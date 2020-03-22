// tslint:disable
// eslint-disable
// this is an auto generated file. This will be overwritten

export const createLore = /* GraphQL */ `
  mutation CreateLore(
    $input: CreateLoreInput!
    $condition: ModelLoreConditionInput
  ) {
    createLore(input: $input, condition: $condition) {
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
export const updateLore = /* GraphQL */ `
  mutation UpdateLore(
    $input: UpdateLoreInput!
    $condition: ModelLoreConditionInput
  ) {
    updateLore(input: $input, condition: $condition) {
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
export const deleteLore = /* GraphQL */ `
  mutation DeleteLore(
    $input: DeleteLoreInput!
    $condition: ModelLoreConditionInput
  ) {
    deleteLore(input: $input, condition: $condition) {
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
export const createStory = /* GraphQL */ `
  mutation CreateStory(
    $input: CreateStoryInput!
    $condition: ModelStoryConditionInput
  ) {
    createStory(input: $input, condition: $condition) {
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
export const updateStory = /* GraphQL */ `
  mutation UpdateStory(
    $input: UpdateStoryInput!
    $condition: ModelStoryConditionInput
  ) {
    updateStory(input: $input, condition: $condition) {
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
export const deleteStory = /* GraphQL */ `
  mutation DeleteStory(
    $input: DeleteStoryInput!
    $condition: ModelStoryConditionInput
  ) {
    deleteStory(input: $input, condition: $condition) {
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
