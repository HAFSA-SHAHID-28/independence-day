var userName = prompt("Enter your name!").toUpperCase();

document.writeln(
    `
    <!-- header -->
    <section class="header">
        <nav class="navbar fixed-top navbar-expand-lg">
          <div class="container-xxl d-flex justify-content-between align-items-center">
            <a class="navbar-brand text-white d-flex align-items-center" href="#">
              <img src="./assets/flag.png" alt="Pakistan Flag" width="63" height="45" class="me-3">
              <span class="hidden"><strong>Independence  Day</strong></span>
            </a>
            <button class="btn " type="button"><strong>Pakistan</strong></button>
          </div>
        </nav>
      </section>

  <!-- hero section -->
    <section class="hero">
        <div class="hero-container container-xxl">
          <div class="hero-item">
              <img src="./assets/quaid.png" alt="Quaid-e-Azam" class="img-fluid hero-img">
           </div>
           <div class="hero-text">
              <h1>Happy! <br> Independence Day <br> ${userName} </h1>
              <blockquote class="hero-quote"><p>"From struggle to strength, <br> a nation was born."</p></blockquote>
              <h4>14th August 1947 - Celebrating Freedom</h4>
           </div>
           <div class="hero-item">
              <img src="./assets/waving.gif" alt="Pakistan Flag"  class="img-fluid hero-img">
           </div>
        </div>
    </section>

  <!-- leader section -->
    <section class="leader">
      <div class="leader-container container-xxl d-flex">
          <h2>OU<span class="yellow">R HE</span>ROES</h2>
          <p>The great personalities who fought for our freedom</p>
          <div class="leader-container-all-cards d-flex">
            <div class="leader-card d-flex">
              <div class="leader-card-content">
                  <h3>Quaid-e-Azam Muhammad Ali Jinnah</h2>
                  <p>Quaid-e-Azam Muhammad Ali Jinnah (1876–1948) was the founding father of Pakistan, a visionary leader, and a steadfast advocate for the rights of Muslims in the Indian subcontinent. His leadership, determination, and unwavering principles led to the creation of Pakistan on 14th August 1947.</p>
                  <blockquote class="leader-quote">"With faith, discipline and selfless devotion to duty, there is nothing worthwhile that you cannot achieve."</blockquote>
              </div>
              <div class="leader-card-image">
                <img src="./assets/quaid-1.jpg" class="img-fluid" alt="Quaid-e-Azam Muhammad Ali Jinnah">
              </div>
          </div>
          <div class="leader-card d-flex">
            <div class="leader-card-content">
                <h3>Allama Muhammad Iqbal</h2>
                <p>Allama Muhammad Iqbal (1877–1938), known as the “Poet of the East,” was a philosopher, poet, and politician who inspired the Muslims of the Indian subcontinent to strive for independence. His poetry awakened a sense of identity and unity among Muslims, and his vision laid the intellectual foundation for the creation of Pakistan.</p>
                <blockquote class="leader-quote">"Nations are born in the hearts of poets, they prosper and die in the hands of politicians."</blockquote>
            </div>
            <div class="leader-card-image">
              <img src="./assets/allama-iqbal-1.jpg" class="img-fluid" alt="Allama Muhammad Iqbal">
            </div>
          </div>
          <div class="leader-card d-flex">
            <div class="leader-card-content">
                <h3>Fatima Jinnah</h2>
                <p>Fatima Jinnah (1893–1967), known as the “Mother of the Nation,” was a leader, dental surgeon, and one of the most prominent women in the Pakistan Movement. As the sister of Quaid-e-Azam Muhammad Ali Jinnah, she stood firmly by his side, advocating for women’s rights, political freedom, and social justice. Her courage and dedication made her an enduring symbol of strength for the nation.</p>
                <blockquote class="leader-quote">"Unity, faith, and discipline should be our guiding principles to make Pakistan strong and prosperous."</blockquote>
            </div>
            <div class="leader-card-image">
              <img src="./assets/fatima-jinnah.jpg" class="img-fluid" alt="Fatima Jinnah">
            </div>
          </div>
          <div class="leader-card d-flex">
            <div class="leader-card-content">
                <h3>Sir Syed Ahmed Khan</h2>
                <p>Sir Syed Ahmed Khan (1817–1898) was a visionary educator, reformer, and statesman who played a pivotal role in uplifting the Muslim community of the Indian subcontinent. He founded the Muhammadan Anglo-Oriental College, which later became Aligarh Muslim University, to promote modern education among Muslims. His efforts laid the foundation for intellectual and political awakening, ultimately influencing the Pakistan Movement.</p>
                <blockquote class="leader-quote">"Do not show the face of Islam to others; instead, show your face as the follower of true Islam through your actions."</blockquote>
            </div>
            <div class="leader-card-image">
              <img src="./assets/sir-syed-ahmed.jpg" class="img-fluid" alt="Sir Syed Ahmed Khan">
            </div>
          </div>
          </div>
          <button class="zindabad-btn">Pakistan Zindabad</button>
      </div>
    </section>

    <footer class="custom-footer">
      <div class="container text-center">
        <p>© 2025 Pakistan Heroes | Designed by Hafsa Shahid</p>
        <p class="small">"Unity, Faith, Discipline" – Quaid-e-Azam Muhammad Ali Jinnah</p>
      </div>
    </footer>

    `
)