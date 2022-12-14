<template>
  <div>

    <!-- 基础信息修改 -->

      <div class="session-content">
        <el-form class="userForm" ref="userForm" :model="userForm" label-width="6rem">
      <el-form-item prop="username" label="用户名">
        <span v-text="user.username" v-if="!isEdit"></span>
        <el-input v-else type="text" v-model="userForm.username" placeholder="输入用户名" style="wdith: 5rem"></el-input>
      </el-form-item>
      <el-form-item prop="userImage" label="用户头像">
        <el-image :src="user.userImage" alt="" class="userImage" v-if="!isEdit"></el-image>
        <el-upload
          class="avatar-uploader"
          :action="$upload_path"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :on-error="handleAvatarError"
          :before-upload="beforeAvatarUpload"
          v-else
        >
          <el-image v-if="imageUrl" :src="imageUrl" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item prop="phone" label="手机号">
        <span v-text="user.phone" v-if="!isEdit"></span>
        <el-input v-else type="text" v-model="userForm.phone" placeholder="更改手机号绑定" style="wdith: 5rem"></el-input>
      </el-form-item>
      <el-form-item prop="email" label="邮箱">
        <span v-text="user.email" v-if="!isEdit"></span>
        <el-input v-else type="text" v-model="userForm.email" placeholder="更改邮箱绑定" style="wdith: 5rem"></el-input>
      </el-form-item>
      <el-form-item >
        <el-button v-text="isEdit ? '修改' : '编辑'" type="primary" @click="handleChange"></el-button>
      </el-form-item>
    </el-form>
      </div>


      <div class="session-content">
        <el-form class="userForm" ref="userForm" :model="passwordForm" label-width="6rem">
      <el-form-item prop="username" label="原密码">
        <el-input type="text" v-model="passwordForm.password" placeholder="输入新密码" style="wdith: 5rem"></el-input>
      </el-form-item>
      <el-form-item prop="username" label="新密码">
        <el-input type="text" v-model="passwordForm.newPassword" placeholder="输入新密码" style="wdith: 5rem"></el-input>
      </el-form-item>
      <el-form-item >
        <el-button v-text="'修改'" type="primary" @click="handleChangePassword"></el-button>
      </el-form-item>
    </el-form>
      </div>
   <el-empty></el-empty>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
  name: "profilePage",
  data() {
    return {
      userForm: {
        username: "狂徒张三",
        userImage: "",
        phone: "",
        email: "",
      },
      passwordForm: {
        password: '',
        newPassword: ''
      },
      isEdit: false,
      isChangePassword: false,
      imageUrl: "",
    };
  },
  mounted() {
    this.userForm = JSON.parse(sessionStorage.getItem('userInfo')) || {}
  },
  computed: {
    user() {
      return JSON.parse(sessionStorage.getItem('userInfo')) || {}
    }
  },
  methods: {
    ...mapMutations('user', ['UpdateUserInfo']),

    // 修改密码
    handleChangePassword() {
      if(true) 
      this.$message.success('密码修改成功！')
    },

//修改基础信息
    handleChange() {
      if(this.isEdit) {
        this.$message.success('信息修改成功！')
        this.UpdateUserInfo(this.userForm)
        // this.$forceUpdate()
        location.reload()
      } 
      this.isEdit = !this.isEdit
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    handleAvatarError(err, file, fileList) {
      this.$message.error("文件上传失败！");
    },
    beforeAvatarUpload(file) {
      console.log(file);
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
  }
};
</script>

<style scoped lang='scss'>
.root {
  display: flex;
  justify-content: space-between;

  .session {
    width: 45%;
  }
}

.session-title {
  color: var(--bgc-clr6);
  font-size: 2em;
  font-weight: bold;
}

 .base-info {
  width: 50%;
 }

.session-content {
  margin: 3rem 0 7rem 0;
}
.userImage {
    width: 10rem;
  }

.avatar-uploader {
  .el-upload {
    border: 1px dashed var(--bgc-clr6);
    border-radius: 0.5rem;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }

  .el-upload:hover {
    border-color: var(--bgc-clr2);
  }

  .avatar {
    width: 8rem;
    height: 8rem;
    display: block;
  }

  .avatar-uploader-icon {
    font-size: 1.5rem;
    color: var(--bgc-clr4);
    width: 8rem;
    height: 8rem;
    line-height: 8rem;
    text-align: center;
    border-radius: 0.5rem;
    border: 1px dashed var(--bgc-clr4);
  }
}
</style>