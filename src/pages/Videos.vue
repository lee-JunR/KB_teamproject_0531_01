<template lang="">
    <div class="container">
        <h1>영상 리스트</h1>
        <div class="modal-wrap" v-if="modalCheck" style="z-index: 10000">
            <div class="modal-container">
                <YoutubeVue3 :videoid="`${currentVideoId}`" />
                <div class="modal-btn">
                    <button type="button" @click="modalOpen" class="btn btn-dark">영상중지</button>
                    <button type="button" @click="modalOpen" class="btn btn-dark">닫기</button>
                    <button type="button" @click="next()" class="btn btn-dark">다음 영상</button>
                </div>
            </div>
        </div>
        <ul v-for="video in videoList" class="list-group">
            <li class="list-group-item">
                {{ video.title }} ({{ video.category }})
                <button type="button" @click="popModal(video.id)" class="btn btn-dark">듣기</button>
            </li>
        </ul>
        <div class="container mt-3">
            <div class="d-flex flex-column">
                <div class="p-2 bg-info">Flex item 1</div>
                <div class="p-2 bg-warning">Flex item 2</div>
            </div>
        </div>
    </div>
</template>
<script>
    import { ref, reactive } from "vue";
    import { YoutubeVue3 } from "youtube-vue3";
    export default {
        components: { YoutubeVue3 },
        setup() {
            const currentVideoId = ref("");
            const modalCheck = ref(false);
            const videoList = reactive([
                { id: 0, title: "범 내려온다", videoId: "gQlMMD8auMs", category: "offical" },
                { id: 1, title: "좌우나졸", videoId: "2S24-y0Ij3Y", category: "offical" },
                { id: 2, title: "별주부가 울며 여짜오되", videoId: "ImuWa3SJulY", category: "offical" },
                { id: 3, title: "어류도감", videoId: "xfqBQ2XhBCg", category: "offical" },
                { id: 4, title: "범 내려온다", videoId: "ATK7gAaZTOM", category: "온스테이지2.0" },
            ]);
            const popModal = (id) => {
                let video = videoList.find((v) => {
                    return v.id == id;
                });
                currentVideoId.value = video.videoId;
                modalCheck.value = !modalCheck.value;
            };

            const modalOpen = () => {
                modalCheck.value = !modalCheck.value;
            };

            const next = () => {
                let nowVideo = videoList.find((v) => {
                    return v.videoId == currentVideoId.value;
                });

                let nextVideo = videoList.find((v) => {
                    return v.id == (nowVideo.id + 1) % videoList.length;
                });

                currentVideoId.value = nextVideo.videoId;
            };
            return { videoList, popModal, modalCheck, modalOpen, currentVideoId, next };
        },
    };
</script>
<style scoped>
    li {
        list-style-type: none;
    }
    .modal-wrap {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.4);
    }
    /* modal or popup */
    .modal-container {
        position: relative;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 550px;
        background: #fff;
        border-radius: 10px;
        padding: 20px;
        box-sizing: border-box;
    }
</style>
