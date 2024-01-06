import { useState } from "react";
import Reviews from "../../Reviews/Reviews";
import "./Tabs.css";
const Tabs = () => {
  const [activeTabs,setActiveTabs] = useState("desc");
  
  return (
    <div className="single-tabs">
            <ul className="tab-list">
              <li>
                <a href="#" className={`ab-button ${activeTabs == "desc" && "active" }`} onClick={() => setActiveTabs("desc")}>
                  Description
                </a>
              </li>
              <li>
                <a href="#"  className={`ab-button ${activeTabs == "info" && "active" }`} onClick={() => setActiveTabs("info")}>
                  Additional information
                </a>
              </li>
              <li>
                <a href="#"  className={`ab-button ${activeTabs == "reviews" && "active" }`} onClick={() => setActiveTabs("reviews")}>
                  Reviews
                </a>
              </li>
            </ul>
            <div className="tab-panel">
              <div className={`tab-panel-descriptions content ${activeTabs == "desc" && "active" }`}>
                <p>
                  Quisque varius diam vel metus mattis, id aliquam diam rhoncus.
                  Proin vitae magna in dui finibus malesuada et at nulla. Morbi
                  elit ex, viverra vitae ante vel, blandit feugiat ligula. Fusce
                  fermentum iaculis nibh, at sodales leo maximus a. Nullam
                  ultricies sodales nunc, in pellentesque lorem mattis quis.
                  Cras imperdiet est in nunc tristique lacinia. Nullam aliquam
                  mauris eu accumsan tincidunt. Suspendisse velit ex, aliquet
                  vel ornare vel, dignissim a tortor.
                </p>
                <br />
                <p>
                  Quisque varius diam vel metus mattis, id aliquam diam rhoncus.
                  Proin vitae magna in dui finibus malesuada et at nulla. Morbi
                  elit ex, viverra vitae ante vel, blandit feugiat ligula. Fusce
                  fermentum iaculis nibh, at sodales leo maximus a. Nullam
                  ultricies sodales nunc, in pellentesque lorem mattis quis.
                  Cras imperdiet est in nunc tristique lacinia. Nullam aliquam
                  mauris eu accumsan tincidunt. Suspendisse velit ex, aliquet
                  vel ornare vel, dignissim a tortor.
                </p>
              </div>
              <div className={`tab-panel-information content ${activeTabs == "info" && "active" }`}>
                <h3>Additional information</h3>
                <table>
                  <tbody>
                    <tr>
                      <th>Color</th>
                      <td>
                        <p>
                          Apple Red, Bio Blue, Sweet Orange, Blue, Green, Pink,
                          Black, White
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <th>Size</th>
                      <td>
                        <p>XXS, XS, S, M, L, XL, XXL</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className={`tab-panel-reviews content ${activeTabs == "reviews" && "active" }`}>
                <Reviews/>
              </div>
            </div>
          </div>
  )
};

export default Tabs;
