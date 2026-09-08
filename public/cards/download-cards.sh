#!/bin/bash
# Download public domain Rider-Waite-Smith tarot cards from Wikimedia Commons
# 1909 Pamela Colman Smith artwork - public domain

BASE_URL="https://upload.wikimedia.org/wikipedia/commons"

echo "Downloading 78 public domain Rider-Waite-Smith tarot cards..."

# Major Arcana
curl -s "${BASE_URL}/thumb/9/90/RWS_Tarot_00_Fool.jpg/350px-RWS_Tarot_00_Fool.jpg" -o major-00.jpg &
curl -s "${BASE_URL}/thumb/d/de/RWS_Tarot_01_Magician.jpg/350px-RWS_Tarot_01_Magician.jpg" -o major-01.jpg &
curl -s "${BASE_URL}/thumb/8/88/RWS_Tarot_02_High_Priestess.jpg/350px-RWS_Tarot_02_High_Priestess.jpg" -o major-02.jpg &
curl -s "${BASE_URL}/thumb/d/d2/RWS_Tarot_03_Empress.jpg/350px-RWS_Tarot_03_Empress.jpg" -o major-03.jpg &
curl -s "${BASE_URL}/thumb/c/c3/RWS_Tarot_04_Emperor.jpg/350px-RWS_Tarot_04_Emperor.jpg" -o major-04.jpg &
curl -s "${BASE_URL}/thumb/8/8d/RWS_Tarot_05_Hierophant.jpg/350px-RWS_Tarot_05_Hierophant.jpg" -o major-05.jpg &
curl -s "${BASE_URL}/thumb/3/3a/RWS_Tarot_06_Lovers.jpg/350px-RWS_Tarot_06_Lovers.jpg" -o major-06.jpg &
curl -s "${BASE_URL}/thumb/9/9b/RWS_Tarot_07_Chariot.jpg/350px-RWS_Tarot_07_Chariot.jpg" -o major-07.jpg &
curl -s "${BASE_URL}/thumb/f/f5/RWS_Tarot_08_Strength.jpg/350px-RWS_Tarot_08_Strength.jpg" -o major-08.jpg &
curl -s "${BASE_URL}/thumb/4/4d/RWS_Tarot_09_Hermit.jpg/350px-RWS_Tarot_09_Hermit.jpg" -o major-09.jpg &
wait
curl -s "${BASE_URL}/thumb/3/3c/RWS_Tarot_10_Wheel_of_Fortune.jpg/350px-RWS_Tarot_10_Wheel_of_Fortune.jpg" -o major-10.jpg &
curl -s "${BASE_URL}/thumb/e/e0/RWS_Tarot_11_Justice.jpg/350px-RWS_Tarot_11_Justice.jpg" -o major-11.jpg &
curl -s "${BASE_URL}/thumb/2/2b/RWS_Tarot_12_Hanged_Man.jpg/350px-RWS_Tarot_12_Hanged_Man.jpg" -o major-12.jpg &
curl -s "${BASE_URL}/thumb/d/d7/RWS_Tarot_13_Death.jpg/350px-RWS_Tarot_13_Death.jpg" -o major-13.jpg &
curl -s "${BASE_URL}/thumb/f/f8/RWS_Tarot_14_Temperance.jpg/350px-RWS_Tarot_14_Temperance.jpg" -o major-14.jpg &
curl -s "${BASE_URL}/thumb/5/55/RWS_Tarot_15_Devil.jpg/350px-RWS_Tarot_15_Devil.jpg" -o major-15.jpg &
curl -s "${BASE_URL}/thumb/5/53/RWS_Tarot_16_Tower.jpg/350px-RWS_Tarot_16_Tower.jpg" -o major-16.jpg &
curl -s "${BASE_URL}/thumb/d/db/RWS_Tarot_17_Star.jpg/350px-RWS_Tarot_17_Star.jpg" -o major-17.jpg &
curl -s "${BASE_URL}/thumb/7/7f/RWS_Tarot_18_Moon.jpg/350px-RWS_Tarot_18_Moon.jpg" -o major-18.jpg &
curl -s "${BASE_URL}/thumb/1/17/RWS_Tarot_19_Sun.jpg/350px-RWS_Tarot_19_Sun.jpg" -o major-19.jpg &
wait
curl -s "${BASE_URL}/thumb/d/dd/RWS_Tarot_20_Judgement.jpg/350px-RWS_Tarot_20_Judgement.jpg" -o major-20.jpg &
curl -s "${BASE_URL}/thumb/f/ff/RWS_Tarot_21_World.jpg/350px-RWS_Tarot_21_World.jpg" -o major-21.jpg &
wait

# Wands
curl -s "${BASE_URL}/thumb/1/11/Wands01.jpg/350px-Wands01.jpg" -o wands-01.jpg &
curl -s "${BASE_URL}/thumb/0/0f/Wands02.jpg/350px-Wands02.jpg" -o wands-02.jpg &
curl -s "${BASE_URL}/thumb/f/ff/Wands03.jpg/350px-Wands03.jpg" -o wands-03.jpg &
curl -s "${BASE_URL}/thumb/a/a4/Wands04.jpg/350px-Wands04.jpg" -o wands-04.jpg &
curl -s "${BASE_URL}/thumb/9/9d/Wands05.jpg/350px-Wands05.jpg" -o wands-05.jpg &
curl -s "${BASE_URL}/thumb/3/3b/Wands06.jpg/350px-Wands06.jpg" -o wands-06.jpg &
curl -s "${BASE_URL}/thumb/e/e4/Wands07.jpg/350px-Wands07.jpg" -o wands-07.jpg &
curl -s "${BASE_URL}/thumb/6/6b/Wands08.jpg/350px-Wands08.jpg" -o wands-08.jpg &
curl -s "${BASE_URL}/thumb/4/4d/Tarot_Nine_of_Wands.jpg/350px-Tarot_Nine_of_Wands.jpg" -o wands-09.jpg &
curl -s "${BASE_URL}/thumb/0/0b/Wands10.jpg/350px-Wands10.jpg" -o wands-10.jpg &
wait
curl -s "${BASE_URL}/thumb/6/6a/Wands11.jpg/350px-Wands11.jpg" -o wands-11.jpg &
curl -s "${BASE_URL}/thumb/1/16/Wands12.jpg/350px-Wands12.jpg" -o wands-12.jpg &
curl -s "${BASE_URL}/thumb/0/0d/Wands13.jpg/350px-Wands13.jpg" -o wands-13.jpg &
curl -s "${BASE_URL}/thumb/c/ce/Wands14.jpg/350px-Wands14.jpg" -o wands-14.jpg &
wait

# Cups
curl -s "${BASE_URL}/thumb/3/36/Cups01.jpg/350px-Cups01.jpg" -o cups-01.jpg &
curl -s "${BASE_URL}/thumb/f/f8/Cups02.jpg/350px-Cups02.jpg" -o cups-02.jpg &
curl -s "${BASE_URL}/thumb/7/7a/Cups03.jpg/350px-Cups03.jpg" -o cups-03.jpg &
curl -s "${BASE_URL}/thumb/3/35/Cups04.jpg/350px-Cups04.jpg" -o cups-04.jpg &
curl -s "${BASE_URL}/thumb/d/d7/Cups05.jpg/350px-Cups05.jpg" -o cups-05.jpg &
curl -s "${BASE_URL}/thumb/1/17/Cups06.jpg/350px-Cups06.jpg" -o cups-06.jpg &
curl -s "${BASE_URL}/thumb/a/ae/Cups07.jpg/350px-Cups07.jpg" -o cups-07.jpg &
curl -s "${BASE_URL}/thumb/6/60/Cups08.jpg/350px-Cups08.jpg" -o cups-08.jpg &
curl -s "${BASE_URL}/thumb/2/24/Cups09.jpg/350px-Cups09.jpg" -o cups-09.jpg &
curl -s "${BASE_URL}/thumb/8/84/Cups10.jpg/350px-Cups10.jpg" -o cups-10.jpg &
wait
curl -s "${BASE_URL}/thumb/a/ad/Cups11.jpg/350px-Cups11.jpg" -o cups-11.jpg &
curl -s "${BASE_URL}/thumb/f/fa/Cups12.jpg/350px-Cups12.jpg" -o cups-12.jpg &
curl -s "${BASE_URL}/thumb/6/62/Cups13.jpg/350px-Cups13.jpg" -o cups-13.jpg &
curl -s "${BASE_URL}/thumb/0/04/Cups14.jpg/350px-Cups14.jpg" -o cups-14.jpg &
wait

# Swords
curl -s "${BASE_URL}/thumb/1/1a/Swords01.jpg/350px-Swords01.jpg" -o swords-01.jpg &
curl -s "${BASE_URL}/thumb/9/9e/Swords02.jpg/350px-Swords02.jpg" -o swords-02.jpg &
curl -s "${BASE_URL}/thumb/0/02/Swords03.jpg/350px-Swords03.jpg" -o swords-03.jpg &
curl -s "${BASE_URL}/thumb/b/bf/Swords04.jpg/350px-Swords04.jpg" -o swords-04.jpg &
curl -s "${BASE_URL}/thumb/2/23/Swords05.jpg/350px-Swords05.jpg" -o swords-05.jpg &
curl -s "${BASE_URL}/thumb/2/29/Swords06.jpg/350px-Swords06.jpg" -o swords-06.jpg &
curl -s "${BASE_URL}/thumb/3/34/Swords07.jpg/350px-Swords07.jpg" -o swords-07.jpg &
curl -s "${BASE_URL}/thumb/a/a7/Swords08.jpg/350px-Swords08.jpg" -o swords-08.jpg &
curl -s "${BASE_URL}/thumb/2/2f/Swords09.jpg/350px-Swords09.jpg" -o swords-09.jpg &
curl -s "${BASE_URL}/thumb/d/d4/Swords10.jpg/350px-Swords10.jpg" -o swords-10.jpg &
wait
curl -s "${BASE_URL}/thumb/4/4c/Swords11.jpg/350px-Swords11.jpg" -o swords-11.jpg &
curl -s "${BASE_URL}/thumb/b/b0/Swords12.jpg/350px-Swords12.jpg" -o swords-12.jpg &
curl -s "${BASE_URL}/thumb/d/d4/Swords13.jpg/350px-Swords13.jpg" -o swords-13.jpg &
curl -s "${BASE_URL}/thumb/3/33/Swords14.jpg/350px-Swords14.jpg" -o swords-14.jpg &
wait

# Pentacles
curl -s "${BASE_URL}/thumb/f/fd/Pents01.jpg/350px-Pents01.jpg" -o pentacles-01.jpg &
curl -s "${BASE_URL}/thumb/9/9f/Pents02.jpg/350px-Pents02.jpg" -o pentacles-02.jpg &
curl -s "${BASE_URL}/thumb/4/42/Pents03.jpg/350px-Pents03.jpg" -o pentacles-03.jpg &
curl -s "${BASE_URL}/thumb/3/35/Pents04.jpg/350px-Pents04.jpg" -o pentacles-04.jpg &
curl -s "${BASE_URL}/thumb/9/96/Pents05.jpg/350px-Pents05.jpg" -o pentacles-05.jpg &
curl -s "${BASE_URL}/thumb/a/a6/Pents06.jpg/350px-Pents06.jpg" -o pentacles-06.jpg &
curl -s "${BASE_URL}/thumb/6/6a/Pents07.jpg/350px-Pents07.jpg" -o pentacles-07.jpg &
curl -s "${BASE_URL}/thumb/4/49/Pents08.jpg/350px-Pents08.jpg" -o pentacles-08.jpg &
curl -s "${BASE_URL}/thumb/f/f0/Pents09.jpg/350px-Pents09.jpg" -o pentacles-09.jpg &
curl -s "${BASE_URL}/thumb/4/42/Pents10.jpg/350px-Pents10.jpg" -o pentacles-10.jpg &
wait
curl -s "${BASE_URL}/thumb/e/ec/Pents11.jpg/350px-Pents11.jpg" -o pentacles-11.jpg &
curl -s "${BASE_URL}/thumb/d/d5/Pents12.jpg/350px-Pents12.jpg" -o pentacles-12.jpg &
curl -s "${BASE_URL}/thumb/8/88/Pents13.jpg/350px-Pents13.jpg" -o pentacles-13.jpg &
curl -s "${BASE_URL}/thumb/1/1c/Pents14.jpg/350px-Pents14.jpg" -o pentacles-14.jpg &
wait

echo "Download complete! Downloaded $(ls -1 *.jpg 2>/dev/null | wc -l) card images."
"
