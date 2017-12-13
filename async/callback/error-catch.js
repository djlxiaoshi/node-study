/**
 * @Author JohnLi
 * @Date 2017/12/12 16:46
 */

function a() {
  setTimeout(function () {
    // try{
    throw new Error('出错啦');
    // } catch (e) {
    
    // }
    
  }, 0);
}

try {
  a();
} catch (e) {
  console.log('捕捉到异常啦，好高兴哦');
}