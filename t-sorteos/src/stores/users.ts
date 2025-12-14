import { ref } from "vue";
import { defineStore } from "pinia";
import type { IUserGroup } from "@/interfaces/IUserGroup";
import { chunkArray, shuffleArray } from "@/utils/arrayUtils";

export const useUsersStore = defineStore("Users", () => {
  const userList = ref<string[]>([]);
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

  function fnSetUserList(txtList: string[]) {
    userList.value = [];
    userList.value = txtList;
  }

  function fnSetNewUserGroups(usersPerGroup: number) {
    const tempUserList = shuffleArray(userList.value);
    userGroupList.value = chunkArray(tempUserList, usersPerGroup).map((item) => {
      return {
        userList: item,
      };
    });
  }

  return {
    //State
    userList,
    userGroupList,

    //Getters
    fnGetUserList,
    fnGetUserCount,
    fnGetGroupList,

    //Actions
    fnSetUserList,
    fnSetNewUserGroups,
  };
});
