const modalBackdrop = document.getElementById("modalBackdrop");
const closeBtn = document.getElementById("closeModalBtn");
const openLetter = document.getElementById("openLetter");
const readBtn = document.getElementById("readBtn");
const letterText = document.getElementById("letterText");

// ✅ ข้อความจดหมาย
const MESSAGE = `
สุขสันต์วันครบรอบนะอ้วร ขอบคุณที่อยู่ด้วยกันมาตลอด 
อาจมีทั้งวันที่ดีน้อยกว่าวันที่ไม่ดี แต่ก็ดีใจที่ยังมีอยู่ 
ขอให้เรายังเป็นแบบนี้ไปเรื่อย ๆ เข้าใจกันมากขึ้น 
ทะเลาะกันน้อยลง 555 อยู่ด้วยกันไปนาน ๆ นะ 💕💋
`;

// 🔓 เปิด modal
function openModal(){
  letterText.textContent = MESSAGE.trim();
  modalBackdrop.style.display = "flex";
}

// ❌ ปิด modal
function closeModal(){
  modalBackdrop.style.display = "none";
}

// ===== EVENTS =====
if(openLetter){
  openLetter.addEventListener("click", openModal);
}

if(readBtn){
  readBtn.addEventListener("click", openModal);
}

if(closeBtn){
  closeBtn.addEventListener("click", closeModal);
}

// กดพื้นหลังเพื่อปิด
modalBackdrop.addEventListener("click", (e)=>{
  if(e.target === modalBackdrop){
    closeModal();
  }
});
