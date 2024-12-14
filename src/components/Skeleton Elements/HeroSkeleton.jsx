import "./HeroSkeleton.css";
const SliderGlimmer = () => {
  return (
    <div class="slider-container">
      <div class="poster-skeleton"></div>
      <div class="info-container">
        <div class="title-skeleton"></div>
        <div class="overview-skeleton"></div>
        <div class="details-skeleton">
          <div class="detail-item"></div>
          <div class="detail-item"></div>
        </div>
        <div class="rating-skeleton">
          <div class="rating-bar"></div>
          <div class="info-icon"></div>
        </div>
      </div>
    </div>
  );
};

export default SliderGlimmer;
