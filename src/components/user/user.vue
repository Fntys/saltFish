<template>
<div class="content">
<div id="login" @keyup.enter="login">
            <div class="modal-pf">
            <div class="modal-title">
            <img src="../../assets/img/fish.svg" alt="" >
            <router-view></router-view>
            </div>
            </div>
            </div>
</div>
</div>
</template>

<script>
import AV from "../../assets/js/av"
import Util from "../../util/util"
/*import "../../assets/js/initLeanCloud"*/
export default {
    data(){
        return{
            tipFlag: false
        }
    },
    mounted(){
    }
}

</script>