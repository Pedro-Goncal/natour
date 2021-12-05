const Booking = () => {
  return (
    <section className="section-book">
      <div className="row">
        <div className="book">
          <div className="book__form">
            <form className="form">
              <div className=" u-margin-bottom-md">
                <h2 className="heading-secondary">Start Booking Now</h2>
              </div>
              <div className="form__group">
                <input
                  className="form__input"
                  type="text"
                  placeholder="Full Name"
                  requiered
                  id="name"
                />
                <label for="name" className="form__label">
                  Full Name
                </label>
              </div>
              <div className="form__group">
                <input
                  className="form__input"
                  type="email"
                  placeholder="Email address"
                  requiered
                  id="email"
                />
                <label for="email" className="form__label">
                  Email address
                </label>
              </div>
              <div className="form__group u-margin-bottom-md">
                <div className="form__radio-group ">
                  <input
                    type="radio"
                    className="form__radio-input"
                    id="small"
                    name="size"
                  />
                  <label for="small" className="form__radio-label">
                    <span className="form__radio-button"></span>
                    Small Tour Group
                  </label>
                </div>
                <div className="form__radio-group">
                  <input
                    type="radio"
                    className="form__radio-input"
                    id="large"
                    name="size"
                  />
                  <label for="large" className="form__radio-label">
                    <span className="form__radio-button"></span>
                    Large Tour Group
                  </label>
                </div>
              </div>

              <div className="form__group">
                <button className="btn btn--green">Next step </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
