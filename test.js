// li 생성 버튼
var liBtn = document.getElementById("liBtn");

            liBtn.onclick = function(){
                document.write("<ul>")
                for(var i = 0; i < 4; i ++){
                    document.write("<li id =" + i + ">" + i + "</li>");
                }
                document.write("</ul>");
            }

            // 색 바꾸는 함수 생성
            function changeColor(element) {
                element.style.color = "red";
            }

            // 클래스명으로 버튼 찾기
            var colorBtn = document.getElementsByClassName("btn")[1];
            
            // 색과 객체 내부 내용 변경
            colorBtn.onclick = function(){
                var target = document.getElementById("target");
                changeColor(target);
                target.innerHTML = "<h1>클릭되었습니다.</h1>";
            }