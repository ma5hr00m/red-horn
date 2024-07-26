<div class="container">
  <svg width="100" height="100">
    <line x1="0" y1="0" x2="0" y2="0" style="stroke:rgb(255,0,0);stroke-width:2">
        <animate attributeName="x2" from="0" to="100" dur="2s" fill="freeze" keySplines="0.94 0 0.71 0.96" keyTimes="0;1" calcMode="spline" />
        <animate attributeName="y2" from="0" to="100" dur="2s" fill="freeze" keySplines="0.94 0 0.71 0.96" keyTimes="0;1" calcMode="spline" />
    </line>
  </svg>
</div>

<style>
  .container {
		width: 980px;
		padding: 2rem;
    color: #4f4a4a;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>