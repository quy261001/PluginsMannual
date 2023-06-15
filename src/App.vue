<template>
    <div class="wrapper">
    <div v-for="(item, index) in popupList" :key="index">
      <img :src="item.imageUrl" @mouseenter="showPopup($event, item)" @mouseleave="hidePopup" />
      <p>{{ item.text }}</p>
    </div>
  </div>
</template>

<script setup>
import { inject } from 'vue';

const usePopup = inject('usePopup');

const popupList = [
  {
    imageUrl: 'https://d1hjkbq40fs2x4.cloudfront.net/2016-01-31/files/1045.jpg',
    text: '5 Cách Đơn Giản Để Chụp Những Ảnh Đẹp Nhất của Thế Giới!',
  },
  {
    imageUrl: 'https://kenh14cdn.com/thumb_w/660/2020/7/17/brvn-15950048783381206275371.jpg',
    text: 'Cùng ngắm loạt hình ảnh đẹp nhất về đa dạng văn hóa, đại ...',
  },
  {
    imageUrl: 'https://www.elle.vn/wp-content/uploads/2017/07/25/hinh-anh-dep-1.jpg',
    text: '32 hình ảnh đẹp đến nghẹt thở dù không chỉnh sửa Photoshop ...',
  },
  {
    imageUrl: 'https://vtv1.mediacdn.vn/thumb_w/640/2018/11/29/photo-1-154348431990377584420.jpg',
    text: 'Ngỡ ngàng trước những bức ảnh đẹp nhất năm 2018 | VTV.VN',
  },
];

const showPopup = (event, item) => {
  const { text, imageUrl } = item;
  const imgContainer = event.currentTarget.parentNode;
  const img = imgContainer.querySelector('img');
  const rect = imgContainer.getBoundingClientRect();
  const x = rect.left + rect.width / 2;
  const y = rect.top;
  const width = img.clientWidth;
  const height = img.clientHeight;
  usePopup.showPopup(event, text, imageUrl, x, y, width, height);
};

const hidePopup = () => {
  usePopup.hidePopup();
};
</script>

<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}
.wrapper img {
  width: 100%;
  height: 100%;
  border-radius: 10px;
}
.wrapper div:hover {
  cursor: pointer;
}
</style>
