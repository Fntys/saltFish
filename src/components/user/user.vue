<template v-if="ok">
    
</template>



<template v-else>
<div class="content">
<div id="login">
            <div class="modal-pf">
            <div class="modal-title">
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