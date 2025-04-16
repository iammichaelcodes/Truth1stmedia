import React from 'react'

export const TokenCta = () => {
  return (
    
    <div class="container py-5">
    <div class="row g-4">

        {/* <!-- SHOW US YOUR MEMES --> */}
        <div class="col-md-6">
            <div class="card text-center">
                <img src="https://via.placeholder.com/500x250?text=Memes+Image" alt="Show us your memes" />
                <h4 class="mt-3">SHOW US<br />YOUR MEMES bro</h4>
            </div>
        </div>

        {/* <!-- $ANTY Token --> */}
        <div class="col-md-3">
            <div class="card text-center">
                <div class="title">$ANTY TOKENers</div>
                <div class="desc my-2">Governance.<br />Reports, & Rewards</div>
                <div class="arrow">→</div>
            </div>
        </div>

        {/* <!-- Merch Store --> */}
        <div class="col-md-3">
            <div class="card text-center">
                <div class="title">MERCH<br />STORE</div>
                <div class="desc my-2">Limited edition<br />satire gear</div>
                <div class="arrow">›</div>
            </div>
        </div>

        {/* <!-- SIIMERC Store --> */}
        <div class="col-md-6">
            <div class="card text-center">
                <div class="title">SIIMERC<br />STORE</div>
                <div class="desc my-2">Limited edition satire gear</div>
                <div class="arrow">→</div>
            </div>
        </div>

        {/* <!-- Reports & Investigations --> */}
        <div class="col-md-6">
            <div class="card text-center">
                <div class="title">REPORTS &<br />INVESTIGATIONS</div>
                <div class="desc my-2">Access exclusive<br />investigative content</div>
            </div>
        </div>

    </div>
</div>
  )
}
