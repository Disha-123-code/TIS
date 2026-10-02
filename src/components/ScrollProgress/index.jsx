import { useEffect, useState } from "react";
import "./index.css";

function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;

      const documentHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      if (documentHeight === 0) {
        setProgress(0);
        return;
      }

      const currentProgress =
        (scrollTop / documentHeight) * 100;

      setProgress(currentProgress);
    };

    window.addEventListener("scroll", updateProgress);

    updateProgress();

    return () => {
      window.removeEventListener(
        "scroll",
        updateProgress
      );
    };
  }, []);

  return (
    <div className="scroll-progress-container">
      <div
        className="scroll-progress"
        style={{
          width: `${progress}%`,
        }}
      ></div>
    </div>
  );
}

export default ScrollProgress;