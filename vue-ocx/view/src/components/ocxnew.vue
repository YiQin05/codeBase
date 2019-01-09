<template>
  <div id="ocx">
    <h1>ocx</h1>
    <router-link to="/flashImg" tag="a">flash拍照</router-link>
    <object
      name="XDView1"
      ID="XDView1"
      width="640"
      height="480"
      CLASSID="CLSID:8DA9A0A7-AC21-4EA9-BB7E-43AEF89688A6"
      CODEBASE="/WebCMS.exe#Version=2,0,0,0">
    </object>
  </div>
</template>
<script>
export default {
  name: 'ocxnew',
  data: function () {
    return {
      url: '172.16.10.100',
      port: '5000',
      uname: 'admin',
      psw: 'admin',
      Channel: '0'
    }
  },
  mounted () {
    // var obj = document.getElementsByTagName('object')
    // var flag = false
    // for (var i = 0; i < obj.length; i++) {
    //   if (obj[i].getAttribute('id') === 'XDView1') {
    //     flag = true
    //     break
    //   }
    // }
    // console.log(document.getElementsByTagName('body')[0])
    // if (!flag) {
    //   var body = document.getElementById('ocx')
    //   this.domAppend(body)
    // }
    this.Login()
  },
  methods: {
    setAttr (attr, val) {
      var obj = document.createAttribute(attr)
      obj.value = val
      return obj
    },
    domAppend (body, id) {
      var obj = document.createElement('object')
      var objId = ''
      if (id) {
        objId = this.setAttr('id', id)
      } else {
        objId = this.setAttr('id', 'XDView1')
      }
      obj.setAttributeNode(objId)
      var objClassid = this.setAttr(
        'CLASSID',
        'CLSID:8DA9A0A7-AC21-4EA9-BB7E-43AEF89688A6'
      )
      obj.setAttributeNode(objClassid)
      var objName = this.setAttr('name', 'XDView1')
      obj.setAttributeNode(objName)
      var objWidth = this.setAttr('width', 640)
      obj.setAttributeNode(objWidth)
      var objHeight = this.setAttr('height', 480)
      obj.setAttributeNode(objHeight)
      var objCodbase = this.setAttr('CODEBASE', '/WebCMS.exe#Version=2,0,0,0')
      obj.setAttributeNode(objCodbase)
      body.appendChild(obj)
      console.log(15642121)
      console.log(body)
    },

    $: function () {
      var elements = []
      for (var i = 0; i < arguments.length; i++) {
        var element = arguments[i]
        if (typeof element === 'string') {
          element = document.getElementById(element)
        }
        if (arguments.length === 1) {
          return element
        }
        elements.push(element)
      }
      return elements
    },
    Login: function () {
      console.log('见来了')
      this.$('XDView1').m_szUrl = this.url
      this.$('XDView1').m_dwDataPort = this.port
      this.$('XDView1').m_szUserName = this.uname
      this.$('XDView1').m_szPassword = this.psw
      this.$('XDView1').m_ProtocolType = 0
      this.$('XDView1').Login()
      this.$('XDView1').StartPreview()
    }
  }
}
</script>
<style scoped>
</style>
