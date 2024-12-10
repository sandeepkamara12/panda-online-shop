import React from 'react'

const Countdown = () => {
  return (
    <div class="product-countdown is-countdown" data-until="2019, 11, 2">
        <span class="countdown-row countdown-show4">
          <span class="countdown-section">
            <span class="countdown-amount">00</span>
            <span class="countdown-period">Days</span>
          </span>
          <span class="countdown-section">
            <span class="countdown-amount">00</span>
            <span class="countdown-period">Hours</span>
          </span>
          <span class="countdown-section">
            <span class="countdown-amount">00</span>
            <span class="countdown-period">Minutes</span>
          </span>
          <span class="countdown-section">
            <span class="countdown-amount">00</span>
            <span class="countdown-period">Seconds</span>
          </span>
        </span>
    </div>
  )
}

export default Countdown
