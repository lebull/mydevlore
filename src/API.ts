/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateLoreInput = {
  id?: string | null,
  name: string,
};

export type ModelLoreConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelLoreConditionInput | null > | null,
  or?: Array< ModelLoreConditionInput | null > | null,
  not?: ModelLoreConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type UpdateLoreInput = {
  id: string,
  name?: string | null,
};

export type DeleteLoreInput = {
  id?: string | null,
};

export type CreateStoryInput = {
  id?: string | null,
  text: string,
  loreID: string,
};

export type ModelStoryConditionInput = {
  text?: ModelStringInput | null,
  loreID?: ModelIDInput | null,
  and?: Array< ModelStoryConditionInput | null > | null,
  or?: Array< ModelStoryConditionInput | null > | null,
  not?: ModelStoryConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateStoryInput = {
  id: string,
  text?: string | null,
  loreID?: string | null,
};

export type DeleteStoryInput = {
  id?: string | null,
};

export type ModelLoreFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelLoreFilterInput | null > | null,
  or?: Array< ModelLoreFilterInput | null > | null,
  not?: ModelLoreFilterInput | null,
};

export type ModelStoryFilterInput = {
  id?: ModelIDInput | null,
  text?: ModelStringInput | null,
  loreID?: ModelIDInput | null,
  and?: Array< ModelStoryFilterInput | null > | null,
  or?: Array< ModelStoryFilterInput | null > | null,
  not?: ModelStoryFilterInput | null,
};

export type CreateLoreMutationVariables = {
  input: CreateLoreInput,
  condition?: ModelLoreConditionInput | null,
};

export type CreateLoreMutation = {
  createLore:  {
    __typename: "Lore",
    id: string,
    name: string,
    stories:  {
      __typename: "ModelStoryConnection",
      items:  Array< {
        __typename: "Story",
        id: string,
        text: string,
        loreID: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    owner: string | null,
  } | null,
};

export type UpdateLoreMutationVariables = {
  input: UpdateLoreInput,
  condition?: ModelLoreConditionInput | null,
};

export type UpdateLoreMutation = {
  updateLore:  {
    __typename: "Lore",
    id: string,
    name: string,
    stories:  {
      __typename: "ModelStoryConnection",
      items:  Array< {
        __typename: "Story",
        id: string,
        text: string,
        loreID: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    owner: string | null,
  } | null,
};

export type DeleteLoreMutationVariables = {
  input: DeleteLoreInput,
  condition?: ModelLoreConditionInput | null,
};

export type DeleteLoreMutation = {
  deleteLore:  {
    __typename: "Lore",
    id: string,
    name: string,
    stories:  {
      __typename: "ModelStoryConnection",
      items:  Array< {
        __typename: "Story",
        id: string,
        text: string,
        loreID: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    owner: string | null,
  } | null,
};

export type CreateStoryMutationVariables = {
  input: CreateStoryInput,
  condition?: ModelStoryConditionInput | null,
};

export type CreateStoryMutation = {
  createStory:  {
    __typename: "Story",
    id: string,
    text: string,
    loreID: string,
    lore:  {
      __typename: "Lore",
      id: string,
      name: string,
      stories:  {
        __typename: "ModelStoryConnection",
        nextToken: string | null,
      } | null,
      owner: string | null,
    } | null,
    owner: string | null,
  } | null,
};

export type UpdateStoryMutationVariables = {
  input: UpdateStoryInput,
  condition?: ModelStoryConditionInput | null,
};

export type UpdateStoryMutation = {
  updateStory:  {
    __typename: "Story",
    id: string,
    text: string,
    loreID: string,
    lore:  {
      __typename: "Lore",
      id: string,
      name: string,
      stories:  {
        __typename: "ModelStoryConnection",
        nextToken: string | null,
      } | null,
      owner: string | null,
    } | null,
    owner: string | null,
  } | null,
};

export type DeleteStoryMutationVariables = {
  input: DeleteStoryInput,
  condition?: ModelStoryConditionInput | null,
};

export type DeleteStoryMutation = {
  deleteStory:  {
    __typename: "Story",
    id: string,
    text: string,
    loreID: string,
    lore:  {
      __typename: "Lore",
      id: string,
      name: string,
      stories:  {
        __typename: "ModelStoryConnection",
        nextToken: string | null,
      } | null,
      owner: string | null,
    } | null,
    owner: string | null,
  } | null,
};

export type GetLoreQueryVariables = {
  id: string,
};

export type GetLoreQuery = {
  getLore:  {
    __typename: "Lore",
    id: string,
    name: string,
    stories:  {
      __typename: "ModelStoryConnection",
      items:  Array< {
        __typename: "Story",
        id: string,
        text: string,
        loreID: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    owner: string | null,
  } | null,
};

export type ListLoresQueryVariables = {
  filter?: ModelLoreFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLoresQuery = {
  listLores:  {
    __typename: "ModelLoreConnection",
    items:  Array< {
      __typename: "Lore",
      id: string,
      name: string,
      stories:  {
        __typename: "ModelStoryConnection",
        nextToken: string | null,
      } | null,
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetStoryQueryVariables = {
  id: string,
};

export type GetStoryQuery = {
  getStory:  {
    __typename: "Story",
    id: string,
    text: string,
    loreID: string,
    lore:  {
      __typename: "Lore",
      id: string,
      name: string,
      stories:  {
        __typename: "ModelStoryConnection",
        nextToken: string | null,
      } | null,
      owner: string | null,
    } | null,
    owner: string | null,
  } | null,
};

export type ListStorysQueryVariables = {
  filter?: ModelStoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStorysQuery = {
  listStorys:  {
    __typename: "ModelStoryConnection",
    items:  Array< {
      __typename: "Story",
      id: string,
      text: string,
      loreID: string,
      lore:  {
        __typename: "Lore",
        id: string,
        name: string,
        owner: string | null,
      } | null,
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateLoreSubscriptionVariables = {
  owner: string,
};

export type OnCreateLoreSubscription = {
  onCreateLore:  {
    __typename: "Lore",
    id: string,
    name: string,
    stories:  {
      __typename: "ModelStoryConnection",
      items:  Array< {
        __typename: "Story",
        id: string,
        text: string,
        loreID: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    owner: string | null,
  } | null,
};

export type OnUpdateLoreSubscriptionVariables = {
  owner: string,
};

export type OnUpdateLoreSubscription = {
  onUpdateLore:  {
    __typename: "Lore",
    id: string,
    name: string,
    stories:  {
      __typename: "ModelStoryConnection",
      items:  Array< {
        __typename: "Story",
        id: string,
        text: string,
        loreID: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    owner: string | null,
  } | null,
};

export type OnDeleteLoreSubscriptionVariables = {
  owner: string,
};

export type OnDeleteLoreSubscription = {
  onDeleteLore:  {
    __typename: "Lore",
    id: string,
    name: string,
    stories:  {
      __typename: "ModelStoryConnection",
      items:  Array< {
        __typename: "Story",
        id: string,
        text: string,
        loreID: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    owner: string | null,
  } | null,
};

export type OnCreateStorySubscriptionVariables = {
  owner: string,
};

export type OnCreateStorySubscription = {
  onCreateStory:  {
    __typename: "Story",
    id: string,
    text: string,
    loreID: string,
    lore:  {
      __typename: "Lore",
      id: string,
      name: string,
      stories:  {
        __typename: "ModelStoryConnection",
        nextToken: string | null,
      } | null,
      owner: string | null,
    } | null,
    owner: string | null,
  } | null,
};

export type OnUpdateStorySubscriptionVariables = {
  owner: string,
};

export type OnUpdateStorySubscription = {
  onUpdateStory:  {
    __typename: "Story",
    id: string,
    text: string,
    loreID: string,
    lore:  {
      __typename: "Lore",
      id: string,
      name: string,
      stories:  {
        __typename: "ModelStoryConnection",
        nextToken: string | null,
      } | null,
      owner: string | null,
    } | null,
    owner: string | null,
  } | null,
};

export type OnDeleteStorySubscriptionVariables = {
  owner: string,
};

export type OnDeleteStorySubscription = {
  onDeleteStory:  {
    __typename: "Story",
    id: string,
    text: string,
    loreID: string,
    lore:  {
      __typename: "Lore",
      id: string,
      name: string,
      stories:  {
        __typename: "ModelStoryConnection",
        nextToken: string | null,
      } | null,
      owner: string | null,
    } | null,
    owner: string | null,
  } | null,
};
