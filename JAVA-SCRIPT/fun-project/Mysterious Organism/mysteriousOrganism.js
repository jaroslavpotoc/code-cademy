// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)];
  }
  
  // Returns a random single strand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }
  
  // Factory function for creating P. aequor objects
  const pAequorFactory = (specimenNum, dna) => {
    return {
      specimenNum: specimenNum,
      dna: dna,
      mutate() {
        const randomIndex = Math.floor(Math.random() * this.dna.length);
        let newBase = returnRandBase();
        while (newBase === this.dna[randomIndex]) {
          newBase = returnRandBase();
        }
        this.dna[randomIndex] = newBase;
      },
      compareDNA(otherOrganism) {
        const commonBases = this.dna.reduce((count, base, index) => {
          if (base === otherOrganism.dna[index]) {
            return count + 1;
          }
          return count;
        }, 0);
        const commonPercentage = (commonBases / this.dna.length) * 100;
        console.log(`Specimen #${this.specimenNum} and Specimen #${otherOrganism.specimenNum} have ${commonPercentage.toFixed(2)}% DNA in common.`);
      },
      willLikelySurvive() {
        const cgCount = this.dna.filter(base => base === 'C' || base === 'G').length;
        return (cgCount / this.dna.length) >= 0.6;
      }
    };
  };
  
  // Create 30 instances of P. aequor organisms that can survive
  const thirtyOrganisms = [];
  let specimenNum = 1;
  while (thirtyOrganisms.length < 30) {
    const organism = pAequorFactory(specimenNum, mockUpStrand());
    if (organism.willLikelySurvive()) {
      thirtyOrganisms.push(organism);
      specimenNum++;
    }
  }
  
  console.log(thirtyOrganisms);
  
  // Testing methods
  const organism1 = pAequorFactory(101, ['A', 'T', 'C', 'G', 'A', 'T', 'C', 'G', 'A', 'T', 'C', 'G', 'A', 'T', 'C']);
  const organism2 = pAequorFactory(102, ['A', 'T', 'C', 'G', 'A', 'T', 'C', 'G', 'T', 'T', 'C', 'G', 'A', 'T', 'C']);
  
  organism1.mutate();
  organism1.compareDNA(organism2);
  console.log(organism1.willLikelySurvive());
  