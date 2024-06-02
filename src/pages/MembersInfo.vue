<template lang="">
    <div class="card card-body">
        <h2>Members Info</h2>
        <div>
            <img class="img-thumbnail" style="width:90px; height:110px;" :src="member.photo" :title="member.name"/> <br>
            <h2>{{member.name}}</h2>
            <h5>{{member.desc}}</h5>
            <router-link to='/members'>멤버 목록으로</router-link>

            
        </div>
    </div>
</template>
<script>
import { useRoute } from 'vue-router';
import members from '@/members.json';

export default {
    name: "MembersInfo",
    setup() {
        const currentRoute = useRoute();
        const id = parseInt(currentRoute.params.id, 10);
        const member = members.find((m) => m.id === id)


        return { member, id, currentRoute }
    }
}
</script>
<style lang="">

</style>