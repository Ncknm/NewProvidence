$(document).ready(function(){$(".slider").slick({centerMode:!0,centerPadding:"0px",slidesToShow:5,responsive:[{breakpoint:768,settings:{arrows:!1,centerMode:!0,centerPadding:"0px",slidesToShow:3}},{breakpoint:480,settings:{arrows:!1,centerPadding:"0px",slidesToShow:1,slidesToScroll:1,asNavFor:".slider-for"}}]})}),$(document).ready(function(){$(".slider-for").slick({centerMode:!0,centerPadding:"0px",slidesToShow:5,responsive:[{breakpoint:768,settings:{arrows:!1,centerMode:!0,centerPadding:"0px",slidesToShow:3}},{breakpoint:480,settings:{arrows:!1,centerPadding:"0px",slidesToShow:1,slidesToScroll:1,asNavFor:".slider",centerMode:!0,focusOnSelect:!0}}]})}),$(document).ready(function(){function e(){function e(e){return e<c?(o.css({left:"3px",background:"#fff"}),t.css({opacity:"1"}),n.css({opacity:"0.4",color:"#26272d"}),i.addClass("active"),r.removeClass("active")):(o.css({left:"129px",background:"#6fc754"}),t.css({opacity:"0.4"}),n.css({opacity:"1",color:"#fff"}),i.removeClass("active"),r.addClass("active")),!1}o.draggable({containment:"parent",stop:function(s,o){e(o.position.left)}}),s.on("click",function(s){e(parseInt(s.pageX-d-c,10))})}var s=$("#slider1"),o=$("#runner"),t=$(".left"),n=$(".right"),r=$(".starter"),i=$(".pro"),c=s.width()/2-o.width()/2,d=s.offset().left;e()});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJzbGljayIsImNlbnRlck1vZGUiLCJjZW50ZXJQYWRkaW5nIiwic2xpZGVzVG9TaG93IiwicmVzcG9uc2l2ZSIsImJyZWFrcG9pbnQiLCJzZXR0aW5ncyIsImFycm93cyIsInNsaWRlc1RvU2Nyb2xsIiwiYXNOYXZGb3IiLCJmb2N1c09uU2VsZWN0IiwiaW5pdCIsIl9tb3ZlIiwiZGlyZWN0aW9uIiwib2Zmc2V0VyIsInJ1bm5lciIsImNzcyIsImxlZnQiLCJiYWNrZ3JvdW5kIiwib3BhY2l0eSIsInJpZ2h0IiwiY29sb3IiLCJwcm8iLCJhZGRDbGFzcyIsInN0YXJ0ZXIiLCJyZW1vdmVDbGFzcyIsImRyYWdnYWJsZSIsImNvbnRhaW5tZW50Iiwic3RvcCIsImV2ZW50IiwidWkiLCJwb3NpdGlvbiIsInNsaWRlciIsIm9uIiwiZSIsInBhcnNlSW50IiwicGFnZVgiLCJzbE9mZnNldExlZnQiLCJ3aWR0aCIsIm9mZnNldCJdLCJtYXBwaW5ncyI6IkFBQ0FBLEVBQUVDLFVBQVVDLE1BQU0sV0FDbEJGLEVBQUUsV0FBV0csT0FDWEMsWUFBWSxFQUNaQyxjQUFlLE1BQ2ZDLGFBQWMsRUFDZEMsYUFFSUMsV0FBWSxJQUNaQyxVQUNFQyxRQUFRLEVBQ1JOLFlBQVksRUFDWkMsY0FBZSxNQUNmQyxhQUFjLEtBSWhCRSxXQUFZLElBQ1pDLFVBQ0VDLFFBQVEsRUFFUkwsY0FBZSxNQUNmQyxhQUFjLEVBQ2RLLGVBQWdCLEVBQ2hCQyxTQUFVLHFCQU1sQlosRUFBRUMsVUFBVUMsTUFBTSxXQUNsQkYsRUFBRSxlQUFlRyxPQUNmQyxZQUFZLEVBQ1pDLGNBQWUsTUFDZkMsYUFBYyxFQUNkQyxhQUVJQyxXQUFZLElBQ1pDLFVBQ0VDLFFBQVEsRUFDUk4sWUFBWSxFQUNaQyxjQUFlLE1BQ2ZDLGFBQWMsS0FJaEJFLFdBQVksSUFDWkMsVUFDRUMsUUFBUSxFQUVSTCxjQUFlLE1BQ2ZDLGFBQWMsRUFDZEssZUFBZ0IsRUFDaEJDLFNBQVUsVUFDVlIsWUFBWSxFQUNaUyxlQUFlLFNBT3ZCYixFQUFFQyxVQUFVQyxNQUFNLFdBVWxCLFFBQVNZLEtBQ0wsUUFBU0MsR0FBTUMsR0FjWCxNQWJHQSxHQUFZQyxHQUNYQyxFQUFPQyxLQUFLQyxLQUFNLE1BQU9DLFdBQWEsU0FDdENELEVBQUtELEtBQUtHLFFBQVUsTUFDcEJDLEVBQU1KLEtBQUtHLFFBQVUsTUFBT0UsTUFBUSxZQUNwQ0MsRUFBSUMsU0FBUyxVQUNiQyxFQUFRQyxZQUFZLFlBRXBCVixFQUFPQyxLQUFLQyxLQUFNLFFBQVNDLFdBQWEsWUFDeENELEVBQUtELEtBQUtHLFFBQVUsUUFDcEJDLEVBQU1KLEtBQUtHLFFBQVUsSUFBS0UsTUFBUSxTQUNsQ0MsRUFBSUcsWUFBWSxVQUNoQkQsRUFBUUQsU0FBUyxZQUVkLEVBR1hSLEVBQU9XLFdBQ0hDLFlBQVksU0FDWkMsS0FBTSxTQUFTQyxFQUFPQyxHQUNsQmxCLEVBQU1rQixFQUFHQyxTQUFTZCxTQUcxQmUsRUFBT0MsR0FBRyxRQUFRLFNBQVNDLEdBQ3ZCdEIsRUFBTXVCLFNBQVNELEVBQUVFLE1BQVFDLEVBQWV2QixFQUFTLE9BbEN6RCxHQUFJa0IsR0FBU25DLEVBQUUsWUFDWGtCLEVBQVNsQixFQUFFLFdBQ1hvQixFQUFPcEIsRUFBRSxTQUNUdUIsRUFBUXZCLEVBQUUsVUFDVjJCLEVBQVUzQixFQUFFLFlBQ1p5QixFQUFNekIsRUFBRSxRQUNSaUIsRUFBVWtCLEVBQU9NLFFBQVUsRUFBSXZCLEVBQU91QixRQUFTLEVBQy9DRCxFQUFlTCxFQUFPTyxTQUFTdEIsSUErQm5DTiIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy/QodC70LDQudC00LXRgCDRgSDQutCw0YDRgtC40L3QutCw0LzQuFxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xyXG4kKCcuc2xpZGVyJykuc2xpY2soe1xyXG4gIGNlbnRlck1vZGU6IHRydWUsXHJcbiAgY2VudGVyUGFkZGluZzogJzBweCcsXHJcbiAgc2xpZGVzVG9TaG93OiA1LFxyXG4gIHJlc3BvbnNpdmU6IFtcclxuICAgIHtcclxuICAgICAgYnJlYWtwb2ludDogNzY4LFxyXG4gICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgY2VudGVyTW9kZTogdHJ1ZSxcclxuICAgICAgICBjZW50ZXJQYWRkaW5nOiAnMHB4JyxcclxuICAgICAgICBzbGlkZXNUb1Nob3c6IDNcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgYnJlYWtwb2ludDogNDgwLFxyXG4gICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgIGFycm93czogZmFsc2UsXHJcbiAgICAgICAgLy8gY2VudGVyTW9kZTogdHJ1ZSxcclxuICAgICAgICBjZW50ZXJQYWRkaW5nOiAnMHB4JyxcclxuICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgICAgYXNOYXZGb3I6ICcuc2xpZGVyLWZvcidcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIF1cclxufSk7XHJcbn0pO1xyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xyXG4kKCcuc2xpZGVyLWZvcicpLnNsaWNrKHtcclxuICBjZW50ZXJNb2RlOiB0cnVlLFxyXG4gIGNlbnRlclBhZGRpbmc6ICcwcHgnLFxyXG4gIHNsaWRlc1RvU2hvdzogNSxcclxuICByZXNwb25zaXZlOiBbXHJcbiAgICB7XHJcbiAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcclxuICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgIGNlbnRlck1vZGU6IHRydWUsXHJcbiAgICAgICAgY2VudGVyUGFkZGluZzogJzBweCcsXHJcbiAgICAgICAgc2xpZGVzVG9TaG93OiAzXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGJyZWFrcG9pbnQ6IDQ4MCxcclxuICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgICAgIC8vIGNlbnRlck1vZGU6IHRydWUsXHJcbiAgICAgICAgY2VudGVyUGFkZGluZzogJzBweCcsXHJcbiAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICAgIGFzTmF2Rm9yOiAnLnNsaWRlcicsXHJcbiAgICAgICAgY2VudGVyTW9kZTogdHJ1ZSxcclxuICAgICAgICBmb2N1c09uU2VsZWN0OiB0cnVlXHJcbiAgICAgIH1cclxuICAgIH1cclxuICBdXHJcbn0pO1xyXG59KTtcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcbnZhciBzbGlkZXIgPSAkKCcjc2xpZGVyMScpO1xyXG52YXIgcnVubmVyID0gJChcIiNydW5uZXJcIik7XHJcbnZhciBsZWZ0ID0gJChcIi5sZWZ0XCIpO1xyXG52YXIgcmlnaHQgPSAkKFwiLnJpZ2h0XCIpO1xyXG52YXIgc3RhcnRlciA9ICQoXCIuc3RhcnRlclwiKTtcclxudmFyIHBybyA9ICQoXCIucHJvXCIpO1xyXG52YXIgb2Zmc2V0VyA9IHNsaWRlci53aWR0aCgpIC8gMiAtIHJ1bm5lci53aWR0aCgpIC8yO1xyXG52YXIgc2xPZmZzZXRMZWZ0ID0gc2xpZGVyLm9mZnNldCgpLmxlZnQ7XHJcblxyXG5mdW5jdGlvbiBpbml0KCl7IFxyXG4gICAgZnVuY3Rpb24gX21vdmUoZGlyZWN0aW9uKSB7XHJcbiAgICAgICAgaWYoZGlyZWN0aW9uIDwgb2Zmc2V0Vykge1xyXG4gICAgICAgICAgICBydW5uZXIuY3NzKHtsZWZ0OiAnM3B4JywgYmFja2dyb3VuZCA6ICcjZmZmJ30pO1xyXG4gICAgICAgICAgICBsZWZ0LmNzcyh7b3BhY2l0eSA6ICcxJ30pO1xyXG4gICAgICAgICAgICByaWdodC5jc3Moe29wYWNpdHkgOiAnMC40JywgY29sb3IgOiAnIzI2MjcyZCd9KTtcclxuICAgICAgICAgICAgcHJvLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICBzdGFydGVyLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJ1bm5lci5jc3Moe2xlZnQ6ICcxMjlweCcsIGJhY2tncm91bmQgOiAnIzZmYzc1NCd9KTtcclxuICAgICAgICAgICAgbGVmdC5jc3Moe29wYWNpdHkgOiAnMC40J30pO1xyXG4gICAgICAgICAgICByaWdodC5jc3Moe29wYWNpdHkgOiAnMScsIGNvbG9yIDogJyNmZmYnfSk7XHJcbiAgICAgICAgICAgIHByby5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgc3RhcnRlci5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBydW5uZXIuZHJhZ2dhYmxlKHsgXHJcbiAgICAgICAgY29udGFpbm1lbnQ6J3BhcmVudCcsXHJcbiAgICAgICAgc3RvcDogZnVuY3Rpb24oZXZlbnQsIHVpKSB7XHJcbiAgICAgICAgICAgIF9tb3ZlKHVpLnBvc2l0aW9uLmxlZnQpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgc2xpZGVyLm9uKCdjbGljaycsZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgX21vdmUocGFyc2VJbnQoZS5wYWdlWCAtIHNsT2Zmc2V0TGVmdCAtIG9mZnNldFcsIDEwKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuaW5pdCgpO1xyXG59KTsiXX0=
