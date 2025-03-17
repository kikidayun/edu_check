document.addEventListener("DOMContentLoaded", function () {
    const usageButton = document.getElementById("usageButton");
    const usagePopup = document.getElementById("usagePopup");
    const closePopup = document.getElementById("closePopup");

    // 사용법 버튼 클릭 시 팝업 토글
    usageButton.addEventListener("click", function () {
        if (usagePopup.style.display === "none") {
            usagePopup.style.display = "block";
        } else {
            usagePopup.style.display = "none";
        }
    });

    // 닫기 버튼 클릭 시 팝업 숨김
    closePopup.addEventListener("click", function () {
        usagePopup.style.display = "none";
    });

    // 다른 곳 클릭하면 팝업 닫기
    document.addEventListener("click", function (event) {
        if (!usageButton.contains(event.target) && !usagePopup.contains(event.target)) {
            usagePopup.style.display = "none";
        }
    });
});




function getMaterialsForClass(className, level = null, device = null) {
    const materials = {
        "① 신소재(메타물질)": [
            { name: "우드락판", ratio: 4, requiresQuantity: true }, // 4명당 1개의 교구 | 필요한 교구 수 = (총 학생 수 × 반 개수) ÷ ratio
            { name: ["키트(나무판, 수수깡, 글루건, 이면지, 가위, 풍량측정기)"], ratio: null, requiresQuantity: true },
            { name: ["선풍기","보조배터리", "멀티탭"] },
            ],

        "② 반도체": [
                { name: "태블릿", ratio: 1, requiresQuantity: true },
                { name: ["터치펜"] },
            ],
        
        "③ 의공학": {
            "노트북+거짓말탐지기": [
                { name: "노트북", ratio: 2, requiresQuantity: true }, 
                { name: ["충전기·마우스", "멀티탭", "패치", "케이블", "건전지"] },
                { name: "거짓말탐지기", ratio: 4, requiresQuantity: true },
            ],
            "2교시: GSR+심전도": [
                { name: "키트(GSR+심전도 센서)", ratio: 2, requiresQuantity: true },
            ],
            "4교시: 심박수+근전도": [
                { name: "키트(심박수+근전도 센서)", ratio: 2, requiresQuantity: true },
            ]
        },

        "④ 스마트팩토리": [
                { name: "스마트팜용 유킷", ratio: 1, requiresQuantity: true },
                { name: ["기물"] },
                { name: "실습 휴대폰", ratio: 1, requiresQuantity: true },
            ],

        "⑤ 신재생에너지": [
                { name: ["레고브릭", "바퀴", "할로겐등"] },
                { name: "태양광판+USB선풍기", ratio: 1, requiresQuantity: true },
                { name: ["절연테이프", "색테이프", "네임펜", "글루건", "멀티탭"] },
            ],    

        "⑥ 머신러닝": {
            "컴퓨터실": [
                { name: ["컴퓨터실 사용: 웹캠"], ratio: 1, requiresQuantity: true }, 
                { name: ["포스트잇"] },
            ],
            "노트북": [
                { name: "노트북", ratio: 2, requiresQuantity: true }, 
                { name: ["충전기·마우스", "멀티탭", "포스트잇"] },
            ],
            "태블릿": [
                { name: "태블릿", ratio: 1, requiresQuantity: true }, 
                { name: ["포스트잇"] },
            ]
        },

        "⑦ 똑똑한 상상이룸": {
            "2교시": [
                { name: "노트북", ratio: 2, requiresQuantity: true }, 
                { name: ["충전기·마우스", "멀티탭", "웹캠"] },
                { name: "키트(서보, RGB)", ratio: 2, requiresQuantity: true },
                { name: ["케이블"] },
            ],
            "4교시: 메이커": [
                { name: ["수수깡", "폼보드", "글루건", "가위"] },
            ]
        },

        "⑧ 인공지능 딥러닝": [
                { name: "태블릿", ratio: 1, requiresQuantity: true },
                { name: ["터치펜"] },
            ],

        "⑨ 프롬프트 엔지니어": {
            "컴퓨터실": [
                { name: ["컴퓨터실 사용"] }, 
            ],
            "교실": [
                { name: "노트북", ratio: 1, requiresQuantity: true }, 
                { name: ["충전기·마우스", "멀티탭"] },
            ],
        },

        "⑩ 디지털기기 활용": [
                { name: "노트북", ratio: 1, requiresQuantity: true }, 
                { name: ["충전기·마우스", "멀티탭", "웹캠"] },
            ],

        "⑪ 디지털 리터러시": [
                { name: "유인물", ratio: 4, requiresQuantity: true },
                { name: "태블릿", ratio: 1, requiresQuantity: true },
                { name: ["터치펜"] },
            ],

        "⑫ 빅데이터 경제": [
                { name: "유인물", ratio: 4, requiresQuantity: true },
                { name: ["포스트잇"] },
            ],

        "⑬ 빅데이터 분석": [
            { name: "태블릿", ratio: 1, requiresQuantity: true },
            { name: ["터치펜"] },
        ],

    
        "⑭ 정보보안": [
                { name: "금고", ratio: 4, requiresQuantity: true },
            ],


        "⑮ 메타버스": {
            "초등": [
                { name: ["포스트잇"] },
            ],

            "중고등": [
                { name: ["메타버스 박스"], ratio: null, requiresQuantity: true },
            ]
        },

        "⑯ VR": {
            "갈색 VR": [
                { name: "갈색 VR", ratio: 1, requiresQuantity: true },
                { name: ["돌돌이 테이프"] },
            ],
            "파랑 VR": [
                { name: "파랑 VR", ratio: 1, requiresQuantity: true },
                { name: ["돌돌이 테이프"] },
            ],
            "홀로그램": [
                { name: "홀로그램", ratio: 1, requiresQuantity: true },
            ]
        },

        "⑰ AR": [
                { name: "머지큐브", ratio: 1, requiresQuantity: true },
            ],
            
        "⑱ 콘텐츠 기획": {
            "2교시": [
                { name: "유인물", ratio: 4, requiresQuantity: true }, 
            ],
            "3교시": [
                { name: ["놀이교구"] },
            ]
        },  

        "⑲ 크리에이티브 광고 기획": {
            "음향더빙": [
                { name: "실습 휴대폰", ratio: 1, requiresQuantity: true },
            ],

            "과자광고": [
                { name: "유인물", ratio: 4, requiresQuantity: true }, 
                { name: ["과자박스"], requiresQuantity: true },
                { name: ["크로마키"], fixedQuantity: 4 } // ✅ 개수 고정 (항상 4개)
            ]
        },

        "⑳ 게임 기획": {
            "컴퓨터실": [
                { name: ["컴퓨터실 사용"] }, 
            ],
            "교실": [
                { name: ["노트북"], ratio: 1, requiresQuantity: true }, 
                { name: ["충전기·마우스", "멀티탭"] },
                { name: ["or 태블릿"], ratio: 1, requiresQuantity: true }, 
            ],
        },

        "㉑ 앱 개발": {
            "컴퓨터실": [
                { name: ["컴퓨터실 사용: 실습 휴대폰"], ratio: 1, requiresQuantity: true },
            ],
            "교실": [
                { name: ["노트북"], ratio: 1, requiresQuantity: true }, 
                { name: ["충전기·마우스", "멀티탭"] },
                { name: ["or 태블릿"], ratio: 1, requiresQuantity: true }, 
                { name: "실습 휴대폰", ratio: 1, requiresQuantity: true },
            ],
        },

        "㉒ 시뮬레이션": {
            "컴퓨터실": [
                { name: ["컴퓨터실 사용"] }, 
            ],
            "교실": [
                { name: ["노트북"], ratio: 1, requiresQuantity: true }, 
                { name: ["충전기·마우스", "멀티탭"] },
            ],
        },

        "㉓ 메이커": {
            "2교시": [
                { name: "노트북", ratio: 2, requiresQuantity: true }, 
                { name: ["충전기·마우스", "멀티탭"] },
                { name: "키트(서보, RGB)", ratio: 2, requiresQuantity: true },
                { name: ["케이블, 폼보드"] },
            ],
            "3교시": [
                { name: ["수수깡", "글루건", "가위 or 3D펜"], ratio: 1, requiresQuantity: true },
                { name: ["어댑터·케이블", "멀티탭", "도안", "장갑"] },
                { name: ["필라멘트"], requiresQuantity: true, ratio: 4 } // 반 개수×4
            ]
        },

        "㉔ 로고 디자인": [
                { name: "태블릿", ratio: 1, requiresQuantity: true },
                { name: "유인물", quantity: true, ratio: 1 }, // 반 개수×3
                { name: "포토 프린터", requiresQuantity: true, fixedQuantity: 4 }, // 고정 수량: 4
                { name: ["카트리지", "SELPY폰", "보조배터리","터치펜", "멀티탭"] },
            ],                

        "㉕ 애니메이터": [
                { name: "태블릿", ratio: 1, requiresQuantity: true },
                { name: ["터치펜"] },
            ],

        "㉖ 시각디자인": {
            "Quiver": [
                { name: "유인물", ratio: 1, requiresQuantity: true },
                { name: "실습 휴대폰", ratio: 1, requiresQuantity: true },
                ],

            "AI 캐릭터": [
                { name: "태블릿", ratio: 1, requiresQuantity: true },
                { name: ["터치펜"] },
            ]       
        },

        "㉗ 인포메이션 디자인": [
                { name: "태블릿", ratio: 1, requiresQuantity: true },
                { name: "유인물", requiresQuantity: true, ratio: 1 }, // 반 개수×3
                { name: ["터치펜"] },
            ],

        "㉘ 3D설계 모델링": {
            "3D펜": [
                { name: "3D펜", ratio: 1, requiresQuantity: true }, 
                { name: ["어댑터·케이블", "멀티탭", "도안", "가위", "장갑"] },
                { name: ["필라멘트"], Quantity: true, ratio: 4 } // 반 개수×4
            ],
            "팅커캐드": [
                { name: "노트북", ratio: 2, requiresQuantity: true }, 
                { name: ["충전기·마우스", "멀티탭 or 컴퓨터실 사용"] },
            ]
        },

        "㉙ 로봇": {
            "유킷": [
                { name: "유킷", ratio: 1, requiresQuantity: true }, 
                { name: ["유킷 박스"], ratio: 4, requiresQuantity: true },
                { name: "실습 휴대폰", ratio: 1, requiresQuantity: true }, 
                { name: ["배틀맵"], requiresQuantity: true, fixedQuantity: 4 } // 고정 수량: 4
            ],
            "지무": [
                { name: "지무", ratio: 1, requiresQuantity: true }, 
                { name: ["유킷 박스"], ratio: 4, requiresQuantity: true },
                { name: "실습 휴대폰", ratio: 1, requiresQuantity: true }, 
            ],
            "네오봇": [
                { name: "네오봇", ratio: 1, requiresQuantity: true }, 
                { name: "네오봇 박스", ratio: 4, requiresQuantity: true }, 
                { name: ["배틀맵", "건전지", "젠더"] },
            ]
        },

        "㉚ 디지털 헬스": [
                { name: "측정장비키트 (악력기, 폐활량계, 산소포화도, 혈압계)", ratio: 4, requiresQuantity: true },
                { name: "폐활량계 마우스피스", ratio: 1, requiresQuantity: true },
                { name: "유인물", ratio: 2, requiresQuantity: true },
            ],


        "㉛ 자율주행": {
            "유킷": [
                { name: "유킷", ratio: 1, requiresQuantity: true }, 
                { name: ["유킷 박스"], ratio: 4, requiresQuantity: true },
                { name: "실습 휴대폰", ratio: 1, requiresQuantity: true }, 
                { name: ["배틀맵"], requiresQuantity: true, fixedQuantity: 4 } // 고정 수량: 4
            ],
            "지무": [
                { name: "지무", ratio: 1, requiresQuantity: true }, 
                { name: ["유킷 박스"], ratio: 4, requiresQuantity: true },
                { name: "실습 휴대폰", ratio: 1, requiresQuantity: true }, 
            ],
            "네오봇": [
                { name: "네오봇", ratio: 1, requiresQuantity: true }, 
                { name: "네오봇 박스", ratio: 4, requiresQuantity: true }, 
                { name: ["배틀맵", "건전지", "젠더"] },
            ]
        },

        "㉜ 모빌리티": {
            "모빌리티": [
                { name: "라인트레이서", ratio: 2, requiresQuantity: true }, 
                { name: ["노트북"], ratio: 2, requiresQuantity: true },
                { name: ["충전기·마우스", "멀티탭"] },
                { name: ["라인트레이서맵"], requiresQuantity: true, fixedQuantity: 2 } // 고정 수량: 2
            ],

            "네오봇": [
                { name: "네오봇", ratio: 1, requiresQuantity: true }, 
                { name: "네오봇 박스", ratio: 4, requiresQuantity: true }, 
                { name: ["노트북"], ratio: 2, requiresQuantity: true },
                { name: ["충전기·마우스", "멀티탭", "라인트레이서맵", "건전지", "젠더"] },
            ]
        },
        "㉝ 스타트업 설계": [
                { name: "노트북", ratio: 1, requiresQuantity: true },
                { name: ["충전기·마우스", "멀티탭"] },
                { name: ["or 태블릿"], ratio: 1, requiresQuantity: true },
            ],

        "㉞ IMC 통합마케팅커뮤니케이션": [
                { name: "유인물", ratio: 4, requiresQuantity: true },
                { name: "태블릿", ratio: 1, requiresQuantity: true },
                { name: ["터치펜"] },
            ],
            
        "㉟ 경제전략": [
                { name: "?", ratio: 4, requiresQuantity: true },
            ],

    };


    // ✅ 클래스 존재 여부 확인
    if (!materials[className]) return []; 

                if (materials[className]) {
        if (level && materials[className][level]) {
            return materials[className][level]; // ✅ 레벨이 존재하면 해당 데이터를 반환
        }
        if (device && materials[className][device]) {
            return materials[className][device]; // ✅ 기기가 존재하면 해당 데이터를 반환
        }
        if (Array.isArray(materials[className])) {
            return materials[className]; // ✅ 일반 과목 반환
        }
    }
    return []; // ✅ 과목이 없을 경우 빈 배열 반환

    // ✅ 일반 과목 반환
    return Array.isArray(materials[className]) ? materials[className] : [];
    }

    function autoCheck(checkboxId) {
    const checkbox = document.getElementById(checkboxId);
    if (checkbox) {
        checkbox.checked = true;
    }
}
function toggleAllClasses() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"][name^="class"]');
    const allChecked = Array.from(checkboxes).every(checkbox => checkbox.checked);

    checkboxes.forEach(checkbox => {
        checkbox.checked = !allChecked;
        
        // ✅ 추가 옵션을 숨기거나 보이게만 하고, 체크 여부는 유지
        toggleAdditionalOptions(checkbox);
    });
}


function updateProgramCount() {
    const programCountDiv = document.getElementById("programCount");

    // ✅ 프로그램 카운트 요소가 존재하는지 확인
    if (!programCountDiv) {
        console.warn("Warning: programCount 요소가 존재하지 않습니다.");
        return;
    }

    const selectedClasses = Array.from(document.querySelectorAll('input[name^="class"]:checked'));
    const schoolName = document.querySelector('input[name="schoolName"]').value.trim();
    const lessonCount = parseInt(document.querySelector('input[name="lessonCount"]').value.trim()) || 2;
    const totalStudents = parseInt(document.getElementById("totalStudents").value.trim()) || 0;

    const programCount = selectedClasses.length;

    programCountDiv.innerHTML = `
        ${schoolName ? `<strong>${schoolName}</strong>, ` : ""}
        ${lessonCount}차시 
        ${totalStudents ? `(${totalStudents}명)` : ""} - 
        프로그램 총 <strong>${programCount}개</strong> 선택됨.
    `;
}

// 모든 체크박스에 이벤트 리스너 추가
document.querySelectorAll('input[name^="class"]').forEach(checkbox => {
    checkbox.addEventListener('change', updateProgramCount);
});

// 초기 로드 시에도 업데이트
updateProgramCount();


function showSelectedMaterials() {
    const selectedMaterialsListDiv = document.getElementById("selectedMaterialsList");
    const schoolName = document.querySelector('input[name="schoolName"]').value.trim();
    const lessonCount = parseInt(document.querySelector('input[name="lessonCount"]').value.trim()) || 2; // 기본 2차시
    const lessonFrequency = parseInt(document.querySelector('input[name="lessonFrequency"]').value.trim()) || 1;
    const totalStudents = parseInt(document.getElementById("totalStudents").value.trim()) || 0;
    const selectedClasses = Array.from(document.querySelectorAll('input[name^="class"]:checked'));

    // ✅ 반 개수를 고려한 총 프로그램 개수 계산
    let totalPrograms = selectedClasses.reduce((sum, checkbox) => {
        const classNumber = checkbox.name.replace(/[^0-9]/g, '');
        const countInput = document.querySelector(`input[name="count${classNumber}"]`);
        return sum + (parseInt(countInput?.value) || 1); // ✅ 반 개수만큼 프로그램 개수 증가
    }, 0);

    // ✅ 선택한 과목 정보 HTML 생성 (학교명, 차시, 인원 밑에 프로그램 개수 추가)
    let html = `<div class="school-name">
                    ${schoolName || "학교 이름 없음"}  
                    ${lessonCount}차시 (${lessonFrequency}회)
                    ${totalStudents ? ` - ${totalStudents}명` : ""}
                </div>
                <div style="font-size: 14px; color: #555; margin-bottom: 5px;">
                    프로그램 총 <strong>${totalPrograms}개</strong> 선택
                </div>`;
            

    // ✅ 결과를 표시하는 요소에 삽입
    selectedMaterialsListDiv.innerHTML = html;

    selectedClasses.forEach((checkbox) => {
        let className = checkbox.value.trim();
        const classNumber = checkbox.name.replace(/[^0-9]/g, '');
        const countInput = document.querySelector(`input[name="count${classNumber}"]`);
        const count = parseInt(countInput?.value) || 1;

        const levels = Array.from(document.querySelectorAll(`input[name="level${classNumber}"]:checked`))
                            .map(input => input.value);
        const device = document.querySelector(`input[name="device${classNumber}"]:checked`)?.value || null;

        let materials = [];
        if (levels.length > 0) {
            levels.forEach(level => {
                materials = materials.concat(getMaterialsForClass(className, level, device) || []);
            });
        } else {
            materials = getMaterialsForClass(className, null, device) || [];
        }

        html += `<div>${className} <span class="highlight-text">(${count}개반)</span> - 인원: `;
        for (let i = 1; i <= count; i++) {
            html += `<input type="number" name="persons-${className}-${i}" class="editable-input" value="${totalStudents}">`;
            if (i < count) html += ' / ';
        }
        html += `</div>`;

        if (materials.length > 0) {
            html += `<div class="materials">`;
            materials.forEach((material, index) => {
                let quantity = "-";

                // ✅ 횟수(`lessonFrequency`) 증가 반영 대상
                let isConsumable = [
                    "갈색 VR", "파랑 VR", "홀로그램", // VR
                    "머지큐브", // AR
                    "필라멘트", // 3D펜
                    "포토 프린터 카트리지", "과자박스",// 프린터 소모품
                    "유인물" // 유인물도 횟수에 따라 증가
                ].includes(material.name);

                if (material.fixedQuantity !== undefined) {
                    quantity = material.fixedQuantity; // ✅ 고정 수량인 경우
                } else if (material.ratio) {
                    quantity = Math.ceil((totalStudents * count) / material.ratio); // ✅ ratio 기준 계산
                } else if (material.requiresQuantity) {
                    if (Array.isArray(material.name) && material.name.includes("유인물")) {
                        if (["㉔ 로고 디자인", "㉗ 유니버셜 디자인"].includes(className)) {
                            // ✅ 기본적으로 1차시 1회, 2차시 1회 모두 3장
                            quantity = 3;

                            // ✅ 반 개수(count)만큼 곱해줌
                            quantity *= count;

                            // ✅ 2회 이상 진행 시 2배 증가
                            if (lessonFrequency > 1) {
                                quantity *= lessonFrequency / 2; // 🔥 2회일 때만 2배 적용
                            }
                        } else if (["㉖ 시각디자인 (Quiver)"].includes(className)) {
                            quantity = count * lessonFrequency;
                        } else if (["㉚ 디지털 헬스"].includes(className)) {
                            quantity = count * 2 * lessonFrequency;
                        } else {
                            quantity = Math.ceil((totalStudents * count) / 4) * lessonFrequency;
                        }
                    } else if (className === "교구") {
                        quantity = count; // ✅ 교구 항목도 반 개수 적용
                    } else if (className === "① 신소재" && Array.isArray(material.name) && material.name.some(name => name.includes("키트"))) {
                        quantity = count; // ✅ 신소재 키트는 횟수 영향 없이 반 개수(count)만큼 증가
                    } else {
                        quantity = count * lessonFrequency; // ✅ 기본적으로 반 개수 × 횟수 적용
                    }
                }



                // ✅ 횟수(`lessonFrequency`) 증가 반영 (소모품만 * 횟수)
                if (isConsumable) {
                    quantity *= lessonFrequency;
                }

                const materialName = Array.isArray(material.name)
                    ? material.name.join(", ")
                    : material.name;

                html += `${materialName}`;
                if (material.requiresQuantity || material.ratio || material.fixedQuantity !== undefined) {
                    html += ` (<input type="number" name="${className}-${materialName}" class="editable-input" value="${quantity}">)`;
                }
                if (index < materials.length - 1) html += ", ";
            });
            html += `</div>`;
        } else {
            html += `<div class="materials">교구: 없음</div>`;
        }
    });

    selectedMaterialsListDiv.innerHTML = html;
}




function printSelectedMaterials() {
    const selectedMaterialsListDiv = document.getElementById("selectedMaterialsList");
    const memo = document.getElementById("memo")?.value.trim(); // 메모 내용을 가져옴
    
    if (!selectedMaterialsListDiv || selectedMaterialsListDiv.innerHTML.trim() === "") {
        alert("출력할 내용이 없습니다. 먼저 과목을 선택하세요.");
        return;
    }

    const clonedDiv = selectedMaterialsListDiv.cloneNode(true);

    // input 요소를 텍스트로 변환
    clonedDiv.querySelectorAll("input").forEach((input) => {
        const value = input.value || "-";
        input.replaceWith(document.createTextNode(value));
    });
    
    // ✅ 메모 내용을 추가 (새로운 스타일 적용)
    if (memo) {
        const memoDiv = document.createElement("div");
        memoDiv.className = "memo-container"; // 추가된 스타일 적용
        memoDiv.innerHTML = `<strong>📝 확인:</strong> ${memo}`;
        clonedDiv.appendChild(memoDiv);
    }

    // 인쇄 창 생성
    const printWindow = window.open("", "", "height=600,width=800");
    printWindow.document.write("<html><head><title>수업 기자재 체크리스트</title>");
    printWindow.document.write('<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;700&family=Nanum+Gothic:wght@400;700&display=swap" rel="stylesheet">');
    printWindow.document.write(`
        <style>
            body {
                font-family: 'Nanum Gothic', sans-serif;
                line-height: 1.6;
                padding: 20px;
            }
            .school-name {
                font-size: 22pt;
                font-weight: bold;
                margin-bottom: 20px;
            }
            div {
                margin-bottom: 10px;
            }
            .materials {
                margin-left: 15px;
            }
            .memo-container {
                padding: 10px;
                border-radius: 5px;
                font-size: 18px;
                font-weight: bold;                        
                color: #333; /* 기본 메모 텍스트 색상 */
            }
            .memo-container strong {
                font-weight: bold;
                color: #007BFF; /* 🔵 파란색 강조 */
            }
        </style>
    `);
    printWindow.document.write("</head><body>");
    printWindow.document.write(clonedDiv.innerHTML);
    printWindow.document.write("</body></html>");
    printWindow.document.close();

    // 인쇄 실행 (딜레이 추가)
    setTimeout(() => {
        printWindow.print();
    }, 500);
}

document.addEventListener("DOMContentLoaded", function () {
    const checkboxes = document.querySelectorAll('.material-item input[type="checkbox"]');
    const selectAllCheckbox = document.getElementById('selectAllClasses'); // 전체 선택 체크박스

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener("change", function () {
            toggleAdditionalOptions(checkbox);
        });

        // ✅ 페이지 로드 시에도 초기 상태 설정
        toggleAdditionalOptions(checkbox);
    });

    if (selectAllCheckbox) {
        selectAllCheckbox.addEventListener("change", function () {
            const isChecked = selectAllCheckbox.checked;
            checkboxes.forEach(checkbox => {
                checkbox.checked = isChecked;
                toggleAdditionalOptions(checkbox, !isChecked); // ✅ 해제할 때 옵션 숨기기
            });
        });
    }
});

function toggleAdditionalOptions(checkbox, forceHide = false) {
    const materialItem = checkbox.closest('.material-item');
    if (!materialItem) return;

    const additionalOptions = materialItem.querySelectorAll('.level-input');
    const checkedOptions = materialItem.querySelectorAll('.level-input input:checked');
    const mainCheckbox = materialItem.querySelector('input[type="checkbox"]:not(.level-input input)');

    if (forceHide || !mainCheckbox.checked) {
        // ✅ 전체 선택 해제 또는 개별 과목 해제 시 옵션 숨김
        additionalOptions.forEach(option => {
            option.style.display = "none";
        });
        delete materialItem.dataset.keepOptions;
    } else {
        // ✅ 과목이 선택되면 옵션 보이기
        additionalOptions.forEach(option => {
            option.style.display = "inline-block";
        });
        materialItem.dataset.keepOptions = "true";
    }
}

// ✅ 개별 옵션 선택 / 해제 감지 및 숨김 로직 반영
document.querySelectorAll('.level-input input').forEach(option => {
    option.addEventListener('change', function () {
        const materialItem = this.closest('.material-item');
        if (!materialItem) return;

        const checkedOptions = materialItem.querySelectorAll('.level-input input:checked');
        const mainCheckbox = materialItem.querySelector('input[type="checkbox"]:not(.level-input input)');

        if (checkedOptions.length === 0 && mainCheckbox.checked) {
            // ✅ 마지막 옵션이 해제되었어도 과목이 선택된 상태라면 계속 표시
            materialItem.dataset.keepOptions = "true";
            materialItem.querySelectorAll('.level-input').forEach(option => {
                option.style.display = "inline-block";
            });
        } else if (!mainCheckbox.checked) {
            // ✅ 과목이 체크 해제되면 옵션도 숨김
            materialItem.querySelectorAll('.level-input').forEach(option => {
                option.style.display = "none";
            });
            delete materialItem.dataset.keepOptions;
        }
    });
});
