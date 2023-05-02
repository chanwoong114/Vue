<template>
  <div id="app" class="mx-5">
    <h1><b>SSAFY 상담 예약 시스템</b></h1>
    <div class="border row mx-2">
      <div class="col-6 container">
        <h2><b>예약 페이지</b></h2>
        <h4><b>선생님 선택</b></h4>
        <div class="row">
          <div class="col-2"></div>
          <div class="col-3 border noneselected mx-3" v-for="(teacher, index) in teachers" :key="index" 
          @click="onClickTeacher(index)"  :class="{selected: teacher.Selected}">
            {{ teacher.name }}
          </div>
        </div>
        <hr>
        <h4><b>시간 선택</b></h4><br><br>
        <div class="row">
          <span class="col-2 timeFont noneselected" v-for="(time, index) in times" :key="index" @click="onClickTime(index)"  :class="{selected: selectedTimes.includes(time)}">
            {{ time }}
          </span>
        </div>
      </div>
      <div class="col-6 rightBox container">
        <h2><b>상담 신청 현황</b></h2>
        <h4><b>상담 선생님</b></h4>
        <p>성함 : <span v-for="(teacher, index) in selectedTeacher" :key="index">{{ teacher.name }}</span></p>
        <hr>
        <h4><b>예약 현황</b></h4>
        <br>
        <div class="row">
          <span class="col-2">시간들 :</span>  
          <span class="col-2" v-for="(time, index) in selectedTimes" :key="index">{{ time }}</span>
        </div>
        <hr>
        <img src="@/ssafy-logo.png" alt="">
        <br>
        <br>
      </div>    
      </div>
    </div>
    
</template>

<script>

export default {
  name: 'App',
  data: function() {
    return {
      teachers: [
        {name: 'Eric', Selected: false}, 
        {name: 'Tony', Selected: false},
      ],
      times: [
        "09:00","09:30","10:00","10:30","11:00","11:30",
        "12:00","12:30","13:00","13:30","14:00","14:30",
        "15:00","15:30","16:00","16:30","17:00","17:30",
      ],
      selectedTimes: []
    }
  },
  methods: {
    onClickTime: function(index) {
      if (this.selectedTimes.includes(this.times[index])){
        this.selectedTimes = this.selectedTimes.filter(time => time != this.times[index])
      } else {
          if (this.selectedTimes.length == 5) {
          alert('시간은 5개까지만 선택 가능합니다')
          return
        }
        this.selectedTimes.push(this.times[index])
      }
    },
    onClickTeacher: function(index) {
      if (this.teachers[index].Selected) {
        this.teachers[index].Selected = false
      } else {
        if (index == 1) {
          if (this.teachers[0].Selected) {
            this.teachers[0].Selected = false
          }
        } else {
          if (this.teachers[1].Selected) {
            this.teachers[1].Selected = false
          }
        }
        this.teachers[index].Selected = true
      }
    },
    Onfocus: function() {
      
    }
  },
  computed: {
    selectedTeacher: function() {
      return this.teachers.filter(teacher => {
        return teacher.Selected})
    }

  }
  }

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #424242;
  margin-top: 60px;
}
.border {
  border: solid 3px;
}

.timeFont {
  color: #84898C;
}

.selected {
  background-color: #658dc63d;
  color: #0F4C81;
}

.rightBox {
  background-color: #658dc63d;
}

.noneselected:hover {
  background-color: #658dc63d;
  color: #0F4C81;
}


</style>
