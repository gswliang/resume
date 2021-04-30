import "../CSS/Description.css";
import "../CSS/style.css";

const Description = () => {
  const intro =
    "我是Grace,目前就讀國立暨南大學，是今年應屆畢業生，就學期間主修資訊工程學系，上課期間嘗試了各種不同的領域，如：嵌入式系統、影像辨識、機器學習、前端網頁設計、自然語言..等等。嘗試多種領域以後，發現前端讓我覺得寫code也可以很好玩，前端的各種技術對我來說很有挑戰性，但是也因為有興趣，所以學的很開心，我期待可以學到更多技術，用在更廣泛的地方。";
  const end =
    "而我最喜歡的一句話 : Learning by doing, 不斷學習是讓自己進步的動力，在學習中總是可以發現新事物，並且善加利用,將所學的技術實作在我的作品中。";

  return (
    <div>
      <div className="title_title">自我介紹</div>
      <div className="description">
        <p>{intro}</p>
        <p>{end}</p>
      </div>
    </div>
  );
};

export default Description;
