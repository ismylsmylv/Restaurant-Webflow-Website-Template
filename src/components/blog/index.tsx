import "./style.scss";

function Blog() {
  return (
    <div className="Blog">
      <div className="container">
        <div className="subText">blog</div>
        <div className="head">Be First Who Read News</div>
        <div className="text">
          Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content making.
        </div>
        <div className="blogCards">
          <div className="blogCard">
            <div
              className="blogImg"
              style={{
                backgroundImage: `url(
                  "https://s3-alpha-sig.figma.com/img/4b8e/d93d/2fe111302c6007034a196ac340c50c87?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Tk-DjoysjdC1kFP~rqfsw34K3sfjn-ixFFzxfK-cZDWgEe86UYypdzNISVY9gpNP2e0lMjsxc-DuDyus22IroFEk5TX-JGFRmO16wX8HP77nqBBVwyZsXWfJuYIhuD8CEbMa3t7Uj-4O1WjCtzZILKs8QHyCSvtaRglk4W5fKvuMJkED-yaxGccxeh4ZfycfolVk6eSItq6LC6h8oJqi27N4bDyfjWUFPwq7WIun89UV40ORJ0kXqRdn4ixSGeC9AC9WorHNsfCsyoX7CeRX~MDSy2mIvJurMhggPttcyTiA3-FjmZw7DsIQTHyYdJYJ44JxRaJTFyWOHL79DzaJUA__"
                )`,
              }}
            >
              <button className="hoverBtn">View More</button>
            </div>
            <div className="content">
              <div className="info">
                <div className="type">Restaurants</div>
                <div className="date">Feb 22, 2022</div>
              </div>
              <div className="name">
                The Most Popular Delicious Food Of Mediterranean Cuisine
              </div>
              <div className="text">
                Capitalize on low-hanging fruit to identify a ballpark value
                added matrix economically and the creative activity to beta test
                override the food quality.
              </div>
            </div>
          </div>
          <div className="blogCard">
            <div
              className="blogImg"
              style={{
                backgroundImage: `url(
                  "https://s3-alpha-sig.figma.com/img/4b8e/d93d/2fe111302c6007034a196ac340c50c87?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Tk-DjoysjdC1kFP~rqfsw34K3sfjn-ixFFzxfK-cZDWgEe86UYypdzNISVY9gpNP2e0lMjsxc-DuDyus22IroFEk5TX-JGFRmO16wX8HP77nqBBVwyZsXWfJuYIhuD8CEbMa3t7Uj-4O1WjCtzZILKs8QHyCSvtaRglk4W5fKvuMJkED-yaxGccxeh4ZfycfolVk6eSItq6LC6h8oJqi27N4bDyfjWUFPwq7WIun89UV40ORJ0kXqRdn4ixSGeC9AC9WorHNsfCsyoX7CeRX~MDSy2mIvJurMhggPttcyTiA3-FjmZw7DsIQTHyYdJYJ44JxRaJTFyWOHL79DzaJUA__"
                )`,
              }}
            >
              <button className="hoverBtn">View More</button>
            </div>
            <div className="content">
              <div className="info">
                <div className="type">Restaurants</div>
                <div className="date">Feb 22, 2022</div>
              </div>
              <div className="name">
                The Most Popular Delicious Food Of Mediterranean Cuisine
              </div>
              <div className="text">
                Capitalize on low-hanging fruit to identify a ballpark value
                added matrix economically and the creative activity to beta test
                override the food quality.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
