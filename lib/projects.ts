// lib/projects.ts

export type Project = {
  title: string;
  slug: string;
  description: string;
  image: string;
  link?: string;
  content?: string;
  gallery?: string[];

};

export const projects: Project[] = [
  {
    title: "Light Eater",
  slug: "light-eater",
  description: "Award winning game-jam entry. Puzzle/Action solo project",
  image: "/images/LightEater.jpg",
  link: "https://squintz36.itch.io/lighteater",
  content: `
Light Eater is all about giving the player real-time feedback through lighting — not just as a visual effect, but as part of the core gameplay loop. This method handles the player's light visuals, including dynamic flickering when the light is low or being drained.

Here's a key method that drives those effects:

\`\`\`csharp
private void UpdateVisuals()
{
    if (glowLight != null)
    {
        float percent = lightLevel / maxLight;
        float baseIntensity = Mathf.Lerp(0.01f, 1f, percent);
        float intensity = baseIntensity;
        flickerTimer += Time.deltaTime * flickerSpeed;

        float outer = Mathf.Lerp(0f, maxRadius, percent);

        if (isBeingDrained)
        {
            float flicker = Mathf.Sin(flickerTimer * 15f) * 0.4f;
            intensity = Mathf.Clamp(baseIntensity + flicker, 0f, 1f);

            float radiusFlicker = Mathf.Sin(flickerTimer * 10f) * 0.4f;
            outer += radiusFlicker;
            outer = Mathf.Clamp(outer, 0.5f, maxRadius);
        }
        else if (percent <= flickerThreshold && percent > 0)
        {
            float dangerPercent = 1f - (percent / flickerThreshold);
            float dynamicStrength = Mathf.Lerp(0.05f, flickerStrength, dangerPercent);
            float dynamicSpeed = Mathf.Lerp(flickerSpeed * 0.8f, flickerSpeed * 3f, dangerPercent);

            float flicker = Mathf.Sin(flickerTimer * dynamicSpeed) * dynamicStrength;
            intensity = Mathf.Clamp(baseIntensity + flicker, 0f, 1f);

            outer += Mathf.Sin(flickerTimer * 1.5f) * (flickerStrength * 0.2f);
            outer = Mathf.Max(outer, 0.01f);
        }

        glowLight.intensity = intensity;
        glowLight.pointLightOuterRadius = outer;
        glowLight.pointLightInnerRadius = 0f;
    }
}
\`\`\`

This code gives the player's light a smooth but reactive feel. When the player is low on light or being drained, the glow pulses more aggressively to signal danger. When they're safe and full, it stays calm and bright. It's one of those subtle systems that makes the game *feel* better, even if the player doesn't consciously notice it.

That’s the kind of detail I like building into everything I work on.
`
,
  gallery:[]
  },

{
  title: "We're All Going To Die",
  slug: "were-all-going-to-die",
  description:
    "A chaotic, fast-paced twin-stick top-down shooter released on Steam. I served as the Creative Director and Product Owner, leading the design vision and direction.",
  image: "/images/wagtd_header.png",
  link: "https://store.steampowered.com/app/1457140/Were_All_Going_To_Die/",
  content: `
**We're All Going To Die** is a twin-stick top-down shooter packed with chaos, waves of enemies, and a ton of style. It launched on Steam with local co-op, over-the-top action, and a bold, irreverent tone.

As **Creative Director and Product Owner**, I:
- Defined the tone, core experience, and design pillars
- Guided the team’s creative decisions from concept to shipping
- Oversaw playtesting, iteration, and gameplay balancing
- Managed milestones and worked across disciplines to keep production on track

I also worked hands-on with the **UI/UX**, helping design menus, HUD elements, and screens that matched the game’s chaotic vibe without overwhelming the player. The goal was to keep things loud but readable — something that’s deceptively hard to pull off during intense action.

This project gave me valuable experience shipping a commercial game in Unreal and leading a team from concept through release.
`,
  gallery: [
    "/images/wagtd_thumbnail2.jpg",
    "/images/wagtd_thumbnail.jpg"
  ]
},

{
  title: "Space Shooter",
  slug: "space-shooter",
  description: "A wave-based, top-down space shooter featuring a dynamic enemy spawning system that balances challenge with variety.",
  image: "/images/SpaceShooter_header.png",
  link: "", // Add a link if you have one later (GitHub, Itch, etc.)
  content: `
**Space Shooter** is a wave-based, top-down arcade shooter where the player must survive increasingly difficult waves of enemies and hazards in space.

What made this project special was the **spawn system** I designed. Every enemy was assigned a "cost," and the spawner was given a currency budget based on the current wave. The spawner would randomly choose enemies that could be afforded, spawning them until the currency ran out.

This allowed us to:
- Easily scale difficulty by adjusting the wave budget
- Control how often stronger enemies appear
- Keep each wave unpredictable but balanced

Here’s the full class that handles spawning, wave logic, and scaling difficulty over time:

\`\`\`csharp
public class EnemySpawner : MonoBehaviour
{
    public AchievementManager achievementManager;
    public List<BadGuy> enemies = new List<BadGuy>();
    public int currWave;
    public int waveValue;
    public List<GameObject> enemiesToSpawn = new List<GameObject>();

    public Transform[] spawnPoints;
    private float spawnInterval = 1f;
    private float spawnTimer;

    public List<Asteroid> asteroids = new List<Asteroid>();
    private float asteroidSpawnInterval = 15f;
    private float asteroidSpawnTimer;

    public TMP_Text newRoundText;

    void Start()
    {
        GenerateWave();
        newRoundText.gameObject.SetActive(false);
        achievementManager = FindObjectOfType<AchievementManager>();
    }

    private void FixedUpdate()
    {
        if (spawnTimer < 0)
        {
            if (enemiesToSpawn.Count > 0)
            {
                SpawnEnemy();
                spawnTimer = spawnInterval;
            }
            else
            {
                EndWave();
            }
        }
        else
        {
            spawnTimer -= Time.fixedDeltaTime;
        }

        if (asteroidSpawnTimer < 0)
        {
            SpawnAsteroid();
            asteroidSpawnTimer = asteroidSpawnInterval;
        }
        else
        {
            asteroidSpawnTimer -= Time.fixedDeltaTime;
        }
    }

    public void GenerateWave()
    {
        waveValue = currWave * 15;
        ScoreManager.currWave = currWave;
        GetComponent<GameManager>().UpdateWaveText(currWave);
        GenerateEnemies();
    }

    public void GenerateEnemies()
    {
        List<GameObject> generatedEnemies = new List<GameObject>();
        while (waveValue > 0)
        {
            int randEnemyID = Random.Range(0, enemies.Count);
            int randEnemyCost = enemies[randEnemyID].cost;
            if (waveValue - randEnemyCost >= 0)
            {
                generatedEnemies.Add(enemies[randEnemyID].enemyPrefab);
                waveValue -= randEnemyCost;
            }
            else
            {
                break;
            }
        }
        enemiesToSpawn.Clear();
        enemiesToSpawn = generatedEnemies;
    }

    private void SpawnEnemy()
    {
        int randSpawn = Random.Range(0, spawnPoints.Length);
        Instantiate(enemiesToSpawn[0], spawnPoints[randSpawn].position, Quaternion.identity);
        enemiesToSpawn.RemoveAt(0);
    }

    private void SpawnAsteroid()
    {
        int randAsteroid = Random.Range(0, asteroids.Count);
        int randSpawn = Random.Range(0, spawnPoints.Length);
        Instantiate(asteroids[randAsteroid], spawnPoints[randSpawn].position, Quaternion.identity);
    }

    private void EndWave()
    {
        GameObject[] enemiesStillInPlay = GameObject.FindGameObjectsWithTag("Enemy");
        if (enemiesStillInPlay.Length == 0)
        {
            StartNewRound();
        }
    }

    private void StartNewRound()
    {
        currWave += 1;
        if (currWave > 1)
        {
            StartCoroutine(NewRoundBeginning());
            achievementManager.UpdateAchievementProgress("First Game", 1);
            achievementManager.UpdateAchievementProgress("Adept Survivor", 1);
            achievementManager.UpdateAchievementProgress("Survivalist", 1);
        }
        GenerateWave();
    }

    IEnumerator NewRoundBeginning()
    {
        newRoundText.gameObject.SetActive(true);
        yield return new WaitForSeconds(2f);
        newRoundText.gameObject.SetActive(false);
    }
}
\`\`\`

This system gave us scalable difficulty, designer-friendly control over pacing, and dynamic variety — all while remaining modular and clean.
`,
  gallery: [
    "/images/SpaceShooter_thumbnail.png",
    "/images/SpaceShooter_thumbnail2.png"
  ]
}


];
