import {
  sustainabilityHorizonCopy,
  sustainabilityMetrics,
} from "../../data";
import {
  SustainabilityHorizonDescriptionElement,
  SustainabilityHorizonDetailElement,
  SustainabilityHorizonElement,
  SustainabilityHorizonEyebrowElement,
  SustainabilityHorizonInnerElement,
  SustainabilityHorizonMetricElement,
  SustainabilityHorizonMetricsElement,
  SustainabilityHorizonTitleElement,
} from "./SustainabilityHorizon.elements";

export const SustainabilityHorizon = () => {
  return (
    <SustainabilityHorizonElement aria-labelledby="sustentabilidad-horizonte-title">
      <SustainabilityHorizonInnerElement>
        <SustainabilityHorizonEyebrowElement>
          {sustainabilityHorizonCopy.eyebrow}
        </SustainabilityHorizonEyebrowElement>
        <SustainabilityHorizonTitleElement id="sustentabilidad-horizonte-title">
          {sustainabilityHorizonCopy.title}
        </SustainabilityHorizonTitleElement>
        <SustainabilityHorizonDescriptionElement>
          {sustainabilityHorizonCopy.lead}
        </SustainabilityHorizonDescriptionElement>
        <SustainabilityHorizonDetailElement>
          {sustainabilityHorizonCopy.detail}
        </SustainabilityHorizonDetailElement>
        {sustainabilityMetrics.length > 0 ? (
          <SustainabilityHorizonMetricsElement>
            {sustainabilityMetrics.map((metric) => (
              <SustainabilityHorizonMetricElement key={metric.label}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </SustainabilityHorizonMetricElement>
            ))}
          </SustainabilityHorizonMetricsElement>
        ) : null}
      </SustainabilityHorizonInnerElement>
    </SustainabilityHorizonElement>
  );
};
