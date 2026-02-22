import { useEffect } from "react";

const authors = [
  { name: "Ritik Raina", url: "https://rainarit.github.io/", affiliation: "1" },
  { name: "Abe Leite", url: "https://github.com/ajleite", affiliation: "1" },
  { name: "Alexandros Graikos", url: "https://alexgraikos.github.io/", affiliation: "1" },
  { name: "Seoyoung Ahn", url: "https://ahnchive.github.io/", affiliation: "2" },
  { name: "Dimitris Samaras", url: "https://www3.cs.stonybrook.edu/~samaras/", affiliation: "1" },
];

const authors2 = [
  { name: "Gregory J. Zelinsky", url: "https://you.stonybrook.edu/zelinsky/", affiliation: "1" },
];

const institutions = [
  { id: "1", name: "Stony Brook University" },
  { id: "2", name: "UC Berkeley" },
];

const resultsSlides = Array.from({ length: 10 }, (_, i) => `/webpage_assets/result_${i + 1}.jpg`);

export default function Home() {
  useEffect(() => {
    const $ = (window as any).jQuery || (window as any).$;
    if ($ && $.fn && $.fn.carousel) {
      $('#resultsCarousel').carousel({ interval: 7000 });
    }
  }, []);

  return (
    <div className="dreamsim-page">
      <br />
      <center>
        <span data-testid="text-title" className="near-black" style={{ fontSize: "36px", fontWeight: "bold" }}>
          Generating Metamers of Human Scene Understanding
        </span>
        <br />

        <table align="center" width="900px">
          <tbody>
            <tr>
              {authors.map((a) => (
                <td key={a.name} align="center">
                  <center>
                    <span style={{ fontSize: "22px" }}>
                      <a href={a.url}>{a.name}</a>
                      <sup style={{ fontSize: "0.7em", paddingLeft: "1px" }}>{a.affiliation}</sup>
                    </span>
                  </center>
                </td>
              ))}
            </tr>
          </tbody>
        </table>

        <table align="center" width="300px">
          <tbody>
            <tr>
              {authors2.map((a) => (
                <td key={a.name} align="center">
                  <center>
                    <span style={{ fontSize: "22px" }}>
                      <a href={a.url}>{a.name}</a>
                      <sup style={{ fontSize: "0.7em", paddingLeft: "2px" }}>{a.affiliation}</sup>
                    </span>
                  </center>
                </td>
              ))}
            </tr>
          </tbody>
        </table>

        <table align="center" width="500px">
          <tbody>
            <tr>
              {institutions.map((inst) => (
                <td key={inst.id} align="center" style={{ padding: "10px" }}>
                  <span style={{ fontSize: "18px" }}>
                    <sup style={{ paddingRight: "4px", fontSize: "14px", top: "-0.5em" }}>{inst.id}</sup>
                    {inst.name}
                  </span>
                </td>
              ))}
            </tr>
          </tbody>
        </table>

        <table width="800" align="center" className="menu" style={{ marginBottom: "20px", marginTop: "20px", fontWeight: "bold", fontSize: "20px" }}>
          <tbody>
            <tr>
              <td align="center">
                <span className="bg-near-black f6 no_hover br-pill ph3 pv2 dib" style={{ verticalAlign: "top", height: "36px" }}>
                  <a data-testid="link-arxiv" style={{ verticalAlign: "sub", color: "inherit", textDecoration: "none", fontSize: "15px" }} href="https://openreview.net/pdf/01ff76f42010199515991cbc91d9dd87da80d2d6.pdf" target="_blank" rel="noreferrer">
                    <i style={{ paddingRight: "2px", fontSize: "20px" }} className="ai ai-arxiv" aria-hidden="true"></i>
                    Paper
                  </a>
                </span>
                <span className="bg-near-black f6 no_hover br-pill ph3 pv2 dib" style={{ verticalAlign: "top", height: "36px" }}>
                  <a data-testid="link-github" style={{ color: "inherit", textDecoration: "none", fontSize: "15px" }} href="https://github.com/rainarit/metamergen" target="_blank" rel="noreferrer">
                    <i style={{ paddingRight: "2px", fontSize: "23px" }} className="fab fa-github" aria-hidden="true"></i>
                    Code
                  </a>
                </span>
                <span className="bg-near-black f6 no_hover br-pill ph3 pv2 dib" style={{ verticalAlign: "top", height: "36px" }}>
                  <a data-testid="link-bibtex" style={{ verticalAlign: "sub", color: "inherit", textDecoration: "none", fontSize: "15px" }} href="#bibtex">
                    <i style={{ paddingRight: "2px", fontSize: "20px" }} className="fa fa-quote-left" aria-hidden="true"></i>
                    Bibtex
                  </a>
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </center>

      <center>
        <img className="round" style={{ width: "900px", maxWidth: "95%" }} src="/webpage_assets/teaser.jpg" alt="MetamerGen teaser" />
      </center>
      <br />

      <p id="teaser-description">
        <span id="bold">MetamerGen</span> is a latent diffusion model that combines peripherally obtained scene gist information with information obtained from scene-viewing fixations to generate image metamers for what humans understand after viewing a scene. Left: a foveated representation combining high-resolution fixated regions with peripherally degraded context. Right: MetamerGen-generated scenes conditioned on the foveated input.
      </p>
      <br />
      <hr />

      <center>
        <h1 data-testid="text-abstract">Abstract</h1>
      </center>
      <table align="center" width="900px">
        <tbody>
          <tr>
            <td>
              Human vision combines low-resolution "gist" information from the visual periphery with sparse but high-resolution information from fixated locations to construct a coherent understanding of a visual scene. In this paper, we introduce MetamerGen, a tool for generating scenes that are aligned with latent human scene representations. MetamerGen is a latent diffusion model that combines peripherally obtained scene gist information with information obtained from scene-viewing fixations to generate image metamers for what humans understand after viewing a scene. Generating images from both high and low resolution (i.e. "foveated") inputs constitutes a novel image-to-image synthesis problem, which we tackle by introducing a dual-stream representation of the foveated scenes consisting of DINOv2 tokens that fuse detailed features from fixated areas with peripherally degraded features capturing scene context. To evaluate the perceptual alignment of MetamerGen generated images to latent human scene representations, we conducted a same-different behavioral experiment where participants were asked for a "same" or "different" response between the generated and the original image. With that, we identify scene generations that are indeed metamers for the latent scene representations formed by the viewers. MetamerGen is a powerful tool for understanding scene understanding. Our proof-of-concept analyses uncovered specific features at multiple levels of visual processing that contributed to human judgments. While it can generate metamers even conditioned on random fixations, we find that high-level semantic alignment most strongly predicts metamerism when the generated scenes are conditioned on viewers' own fixated regions.
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      <hr />

      <center>
        <h1 data-testid="section-method">Method</h1>
      </center>
      <center>
        <div className="container-fluid" id="method-container" style={{ textAlign: "center", maxWidth: "900px" }}>
          <div className="row">
            <div className="col" id="method-figure">
              <img className="round" style={{ width: "100%", maxWidth: "100%" }} src="/webpage_assets/method.png" alt="MetamerGen Method" />
            </div>
          </div>
          <div className="row" style={{ marginTop: "20px" }}>
            <div className="col" id="method-description">
              MetamerGen uses a dual-stream conditioning approach built on Stable Diffusion. A foveal stream provides high-resolution DINOv2 features from fixated regions, while a peripheral stream captures blurred, low-resolution context from the entire scene. Both streams pass through resampler networks that compress features into conditioning tokens for the diffusion model's cross-attention mechanism.
            </div>
          </div>
        </div>
      </center>
      <br />
      <hr />

      <center>
        <h1>Results</h1>
      </center>
      <br />
      <table width="900px" align="center">
        <tbody>
          <tr>
            <td>
              <div id="resultsCarousel" className="carousel slide teaser-carousel" data-ride="carousel" data-interval="7000">
                <ol className="carousel-indicators">
                  {resultsSlides.map((_, i) => (
                    <li key={i} data-target="#resultsCarousel" data-slide-to={i} className={i === 0 ? "active" : ""}></li>
                  ))}
                </ol>
                <div className="carousel-inner">
                  {resultsSlides.map((src, i) => (
                    <div key={i} className={`carousel-item ${i === 0 ? "active" : ""}`}>
                      <div>
                        <img className="teaser-img" src={src} alt={`Result ${i + 1}`} />
                      </div>
                    </div>
                  ))}
                </div>
                <a data-testid="button-results-prev" className="carousel-control-prev" href="#resultsCarousel" role="button" data-slide="prev" style={{ height: "500px" }}>
                  <div className="slider-navigation-previous">
                    <svg viewBox="0 0 50 80" xmlSpace="preserve" style={{ marginRight: "4px" }}>
                      <polyline fill="white" strokeWidth=".5em" strokeLinecap="round" strokeLinejoin="round" points="45.63,75.8 0.375,38.087 45.63,0.375" />
                    </svg>
                  </div>
                  <span className="sr-only">Previous</span>
                </a>
                <a data-testid="button-results-next" className="carousel-control-next" href="#resultsCarousel" role="button" data-slide="next" style={{ height: "500px" }}>
                  <div className="slider-navigation-next">
                    <svg viewBox="0 0 50 80" xmlSpace="preserve" style={{ marginLeft: "4px" }}>
                      <polyline fill="white" strokeWidth=".5em" strokeLinecap="round" strokeLinejoin="round" points="0.375,0.375 45.63,38.087 0.375,75.8" />
                    </svg>
                  </div>
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <br /><br /><br /><br /><br />

      <p id="nn-description">
        <span id="bold">Generated metamers.</span>{" "}
        MetamerGen generates scenes conditioned on foveated inputs combining high-resolution fixated regions with peripherally degraded context. We evaluated perceptual alignment through a same-different behavioral experiment, identifying scenes that are true metamers for latent human scene representations.
      </p>
      <br />
      <hr />

      <center>
        <h1 id="bibtex" data-testid="section-bibtex">Bibtex</h1>
      </center>
      <div className="container-fluid" id="code-container" style={{ textAlign: "center", maxWidth: "900px" }}>
        <code style={{ textAlign: "left", display: "block", whiteSpace: "pre" }}>
{`@article{raina2025metamergen,
  title={Generating Metamers of Human Scene Understanding},
  author={Raina, Ritik and Leite, Abe and Graikos, Alexandros
          and Ahn, Seoyoung and Samaras, Dimitris
          and Zelinsky, Gregory J.},
  year={2025}
}`}
        </code>
      </div>
      <br /><br />
    </div>
  );
}
