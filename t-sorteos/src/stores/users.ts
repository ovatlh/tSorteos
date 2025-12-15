import { ref } from "vue";
import { defineStore } from "pinia";
import type { IUserGroup } from "@/interfaces/IUserGroup";
import { chunkArray, shuffleArray } from "@/utils/arrayUtils";

export const useUsersStore = defineStore("Users", () => {
  const userList = ref<string[]>([]);
  const userListToSelect = ref<string[]>([]);
  const userListSelected = ref<string[]>([]);
  const userGroupList = ref<IUserGroup[]>([]);

  function fnGetUserList() {
    return userList.value;
  }

  function fnGetUserCount() {
    return userList.value.length;
  }

  function fnGetGroupList() {
    return userGroupList.value;
  }

  function fnGetUserSelectedList() {
    return userListSelected.value;
  }

  function fnSetUserList(txtList: string[]) {
    const tempList = shuffleArray(txtList);
    userList.value = [];
    userList.value = tempList;
    userListToSelect.value = [];
    userListToSelect.value = tempList;
  }

  function fnSetNewUserGroups(usersPerGroup: number) {
    const tempUserList = shuffleArray(userList.value);
    userGroupList.value = chunkArray(tempUserList, usersPerGroup).map(
      (item) => {
        return {
          userList: item,
        };
      }
    );
  }

  function fnSelectOneUser() {
    const tempList = shuffleArray(userListToSelect.value);
    if (tempList.length > 0) {
      const itemSelected = tempList[0]!;
      userListSelected.value.push(itemSelected);
      userListToSelect.value = tempList.filter((item) => item != itemSelected);
    }
  }

  function fnResetOneUser() {
    userListSelected.value = [];
    userListToSelect.value = [];
    userListToSelect.value = shuffleArray(userList.value);
  }

  return {
    //State
    userList,
    userGroupList,

    //Getters
    fnGetUserList,
    fnGetUserCount,
    fnGetGroupList,
    fnGetUserSelectedList,

    //Actions
    fnSetUserList,
    fnSetNewUserGroups,
    fnSelectOneUser,
    fnResetOneUser,
  };
});
